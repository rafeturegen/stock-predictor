"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row justify-between max-w-6xl md:px-12 py-6 mx-auto gap-2 mt-12">
            <div className="flex flex-col justify-center items-center lg:items-start gap-8 mb-4 mx-auto">
                <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start text-stone-50">
                    <span className="relative">Stop Searching</span>
                    <span className="whitespace-nowrap relative ">
                        <span className="mr-3 sm:mr-4 md:mr-5">Start</span>
                        <span className="relative whitespace-nowrap">
                            <span className="absolute bg-amber-300 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                            <span className="relative text-neutral">right away</span>
                        </span>
                    </span>
                </h1>
                <p className="text-lg max-w-md text-slate-100 mt-6 text-center sm:text-left">A right path for your Academic Success. Start your Academic Comeback today with Success Ladder.</p>
                <a href="#pick" className="bg-amber-300 py-2 px-4 rounded-md text-lg font-bold w-48 mt-2 text-center text-stone-50">Let&apos;s Get Started!</a>
            </div>
            <div className="w-[20rem] h-[20rem] xl:w-[30rem] xl:h-[30rem] rounded-full overflow-hidden flex justify-center items-center mx-auto">
                <Image 
                    src="/successLadderVs.jpg" 
                    alt="with and without success ladder" 
                    width={400} 
                    height={400} 
                    className="object-cover w-[30rem] h-[30rem] mt-12 lg:mt-0"
                />
            </div>
        </section>
    );
}
