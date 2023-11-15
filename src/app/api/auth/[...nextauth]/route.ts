import NextAuth from "next-auth";
import { getAuthConfig } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest, res) {
  //   const res = new NextResponse();
  const authConfig = getAuthConfig();
  return await NextAuth(req, res, authConfig);
}

export { handler as GET, handler as POST };
