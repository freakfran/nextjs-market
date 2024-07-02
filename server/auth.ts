import NextAuth from "next-auth"

import {db} from "@/server"
import {DrizzleAdapter} from "@auth/drizzle-adapter"
import Google from "@auth/core/providers/google";
import Github from "@auth/core/providers/github";


export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: DrizzleAdapter(db),
    secret: process.env.AUTH_SECRET,
    session: {strategy: "jwt"},
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        })
    ],
})