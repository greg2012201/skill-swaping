import GithubProvider from "next-auth/providers/github";
import { signIn, signOut } from "next-auth/react";

export type ProviderOpt = "google" | "github";

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};

export function login(provider: ProviderOpt) {
  signIn(provider);
}

export function logout() {
  signOut();
}
