
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";


export const authOptions={
    adapater:PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
}
const handler=NextAuth(authOptions);

export {handler as GET, handler as POST}