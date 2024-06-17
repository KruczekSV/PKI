import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const name = user.email;

      const existingUser = await prisma.user.findUnique({
        where: { name: name },
      });

      const currentDateTime = new Date();
      currentDateTime.setHours(currentDateTime.getHours() + 2);

      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.email,
            joined: currentDateTime,
            lastvisit: currentDateTime,
          },
        });
      } else {
        await prisma.user.update({
          where: { name: name },
          data: {
            counter: existingUser.counter + 1,
            lastvisit: currentDateTime,
          },
        });
      }

      return true;
    },
  },
  pages: {
    signIn: "/login"
  }
};

