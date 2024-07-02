'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
    href: string,
    label: string
}

export default function BackButton({href, label}: BackButtonProps) {
    return (
        <Button className="font-medium w-full" variant="secondary">
            <Link href={href} aria-label={label}>
                {label}
            </Link>
        </Button>
    )
}