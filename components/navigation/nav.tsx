import {auth} from "@/server/auth";
import Logo from "@/components/navigation/logo";
import {UserButton} from "@/components/navigation/user-button";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {LogIn} from "lucide-react";


export default async function Nav(){
    const session = await auth();


    return (
        <header className="bg-slate-500 py-4">
            <nav>
                <ul className="flex justify-between">
                    <li><Logo/></li>
                    <li>
                        {session ? (
                            <UserButton user={session?.user} expires={session?.expires!}/>
                        ):(
                            <Button asChild={true}>
                                <Link className="flex gap-2" href={'/auth/login'}>
                                    <LogIn size={16}/>
                                    <span>Log in</span>
                                </Link>
                            </Button>
                        )}

                    </li>
                </ul>
            </nav>
        </header>
    );
}