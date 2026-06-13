'use client'

import { webProjects } from "@/data/projectList";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

function page() {

    const navigate = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div className={`w-full bg-[#080808] relative h-auto flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`w-full select-none absolute top-6 text-center text-white font-Red-Hat-Display tracking-[0.3rem] text-[10px] md:text-sm`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Red-Hat-Display text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Section</Link>
                </div>
                <div className={`w-[95%] h-auto py-5 mt-20 gap-6 overflow-auto`}>
                    <div className={`w-full h-auto flex flex-col justify-start items-center gap-2 mb-8`}>
                        <p className={`w-auto select-none px-4 py-2 rounded-full border border-white/10 bg-zinc-900 text-white/60 font-Red-Hat-Display text-[8px] md:text-[12px] tracking-[0.2rem] uppercase`}>Full Stack Web Development Projects</p>
                    </div>

                    <div className={`w-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 pb-8`}>
                        {webProjects.map((list, index) => {
                            return <div key={index} className={`w-[95%] overflow-hidden mb-5 mx-5 md:w-full rounded-2xl border border-black bg-zinc-800 flex flex-col justify-start items-center shadow-md hover:shadow-lg duration-150 ease-in-out pb-5`}>
                                <div className={`w-full h-auto overflow-hidden rounded-b-xl`}>
                                    <img src={list.image} className={`h-full w-full object-cover`} />
                                </div>
                                <p className={`w-full text-start font-Red-Hat-Display text-white capitalize px-3 pt-3 font-semibold text-lg`}>{list.name}</p>
                                <p className={`w-full px-3 italic font-Red-Hat-Display text-white text-[10px] md:text-[12px] pb-5`}>{list.tech}</p>
                                {list.features.map((feat) => {
                                    return <p key={feat} className={`w-full px-3 text-[10px] md:text-[12px] text-white`}>● {feat}</p>
                                })}
                                <div className={`w-full py-3 px-3 flex ${list.deployed ? "justify-between gap-4" : "justify-start"} items-center`}>
                                    <p onClick={() => navigate(list.github)} className={`${list.deployed ? "w-full" : "w-auto"} rounded-full px-4 py-2 cursor-pointer hover:opacity-75 duration-150 ease-in-out bg-black text-white font-semibold flex justify-center items-center text-[12px] gap-3`}>Github <span><FaGithub /></span></p>
                                    <p onClick={() => navigate(list?.live)} className={`${list.deployed ? "w-full" : "w-auto"} rounded-full px-4 py-2 cursor-pointer inset-shadow-sm inset-shadow-green-800 active:opacity-70 hover:opacity-75 duration-200 ease-in-out bg-[#0012ff] text-white font-semibold flex justify-center items-center text-[12px] gap-3 ${list.deployed ? "block" : "hidden"}`}>Live <span><FaLocationArrow /></span></p>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


export default page





