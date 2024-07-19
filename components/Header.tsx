"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type HeaderTypes = {
    signedIn:boolean,
}

export default function Header({signedIn} : HeaderTypes) {
    return (
      <header className="flex max-w-7xl mx-auto justify-between sm:py-6 sm:px-12 items-center">
            <div className="flex items-center gap-3">
                <Image src="/sslogo.jpg" alt="logo" width={64} height={64} className="rounded-full"/>
                <p className="font-brico text-stone-100 text-xl font-bold">Success Ladder</p>
            </div>
            <div className="flex gap-2">
                <button className="w-24 h-10 font-brico text-lg bg-slate-50 text-stone-950  rounded-md">Log In</button>
                <button className="w-24 h-10 font-brico text-lg text-slate-50 bg-stone-950 border border-white/40 rounded-md">Sign Up</button>
            </div>
      </header>
    )
}