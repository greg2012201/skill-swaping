import GithubProvider from "next-auth/providers/github";
import { signIn, signOut } from "next-auth/react";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

export type ProviderOpt = "google" | "github";

// here we should use it only in context of server so make auth config be a function

export function getAuthConfig() {
  const prisma = new PrismaClient();
  return {
    pages: {
      signIn: "/login",
    },
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
    ],
    adapter: PrismaAdapter(prisma),
  };
}

export function login(provider: ProviderOpt) {
  signIn(provider);
}

export function logout() {
  signOut();
}
