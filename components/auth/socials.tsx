'use client'

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

export default function Socials() {
    return (
        <div className="flex flex-col w-full items-center gap-4">
            <Button
                className="w-full flex gap-4 rounded"
                variant="outline"
                onClick={() => signIn('google', {
                redirect: false,
                callbackUrl: '/'
            })}>
                <p>Sign in with Google</p>
                <FcGoogle className="w-5 h-5"/>
            </Button>
            <Button
                className="w-full flex gap-4 rounded"
                variant="outline"
                onClick={() => signIn('github', {
                redirect: false,
                callbackUrl: '/'
            })}>
                <p>Sign in with Github</p>
                <FaGithub className="w-5 h-5"/>
            </Button>
        </div>
    )
}