import { Inter } from "next/font/google";
import "./globals.css";
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PKI app",
  description: "My first next app",
};

export default function RootLayout({ children }) {
  return (
    <ConfigProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ConfigProvider>
  );
}
