"use client";

import Image from "next/image";
import googleLogo from "../../public/icons/google.svg";
import githubLogo from "../../public/icons/githubLogo.svg";
import { signIn, signOut } from "next-auth/react";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-12 mt-5 transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={googleLogo} alt="Google Logo" width={30} height={30} />
      <span className="ml-4">Continue with Google</span>
    </button>
  );
}

export function GitHubSignInButton() {
  const handleClick = () => {
    signIn("github");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-12 mt-5 transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={githubLogo} alt="GitHub Logo" width={30} height={30} />
      <span className="ml-4">Continue with Github</span>
    </button>
  );
}

export function LogoutButton() {
  const handleClick = () => {
    signOut({ callbackUrl: 'http://localhost:3000' });
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-12 mt-5 transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <span className="ml-4">Logout</span>
    </button>
  );
}