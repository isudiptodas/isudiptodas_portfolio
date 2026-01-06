'use client'

import { webProjects } from "@/data/projectList";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function page() {

    const navigate = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div className={`w-full bg-[#080808] relative h-auto flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Studio</Link>
                </div>
                <div className={`w-[95%] h-auto py-5 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 overflow-auto`}>
                    {webProjects.map((list, index) => {
                        return <div key={index} className={`w-[95%] overflow-hidden mb-5 mx-5 md:w-full rounded-2xl border border-black bg-zinc-800 flex flex-col justify-start items-center shadow-md hover:shadow-lg duration-150 ease-in-out pb-3`}>
                            <div className={`w-full h-auto overflow-hidden rounded-b-xl`}>
                                <img src={list.image} className={`h-full w-full object-cover`} />
                            </div>
                            <p className={`w-full text-start font-Michroma text-white capitalize px-3 pt-3 font-semibold text-lg`}>{list.name}</p>
                            <p className={`w-full px-3 italic font-Urbanist text-white text-[10px] md:text-[12px] pb-5`}>{list.tech}</p>
                            {list.features.map((feat) => {
                                return <p key={feat} className={`w-full px-3 text-[10px] md:text-[12px] text-white`}>● {feat}</p>
                            })}
                            <div className={`w-full py-3 px-3 flex ${list.deployed ? "justify-between gap-4" : "justify-start"} items-center`}>
                                <p onClick={() => navigate(list.github)} className={`${list.deployed ? "w-full" : "w-auto"} rounded-full px-4 py-2 cursor-pointer hover:opacity-75 duration-150 ease-in-out bg-black text-white font-semibold flex justify-center items-center text-[12px] gap-3`}>Github <span><FaGithub /></span></p>
                                <p onClick={() => navigate(list?.live)} className={`${list.deployed ? "w-full" : "w-auto"} rounded-full px-4 py-2 cursor-pointer inset-shadow-sm inset-shadow-green-800 active:opacity-70 hover:opacity-75 duration-200 ease-in-out bg-[#77ff00] text-black font-semibold flex justify-center items-center text-[12px] gap-3 ${list.deployed ? "block" : "hidden"}`}>Live <span><FaLocationArrow /></span></p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}


export default page

