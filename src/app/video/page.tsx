'use client'

import { videoLinks } from "@/data/video";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

function page() {

    const [videoOpen, setVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<null | string>(null);

    return (
        <>
            <div className={`w-full bg-[#080808] relative h-auto flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>
                
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Section</Link>
                </div>

                {/* video play box */}
                <div className={`w-full ${videoOpen ? "block" : "hidden"} px-5 pt-10 h-screen flex flex-col justify-start items-center gap-5 top-0 fixed bg-black z-50`}>
                    <div className={`w-auto h-[70vh] md:h-[75vh] md:w-1/2 bg-black overflow-hidden rounded-lg`}>
                        {currentVideo && <video src={currentVideo as string} className={`h-full w-full`} autoPlay loop muted controls />}
                    </div>
                    <p onClick={() => { setVideoOpen(false); setCurrentVideo(null) }} className={`w-auto active:opacity-75 duration-150 ease-in-out px-4 text-center py-2 rounded-full text-black bg-white cursor-pointer text-sm md:text-lg`}>Close Video</p>
                </div>

                <div className={`w-[95%] min-h-screen py-5 mt-14 xl:mt-24 lg:px-3 flex flex-col justify-start items-center overflow-auto`}>
                    <h1 className={`font-Michroma mt-3 border-b-[1px] border-gray-400 pb-5 text-lg font-bold text-white w-full text-start`}>Video Edits</h1>

                    <div className={`w-full h-[30vh] md:h-[40vh] lg:h-[60vh] py-4 flex items-center gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory`}>
                        {videoLinks.map((link, index) => {
                            return <div key={index} className={`shrink-0 snap-center w-auto h-full flex justify-center relative items-center overflow-hidden rounded-2xl bg-neutral-800`}>
                                <img src={link.thumbnail as string} className={`h-full w-auto object-cover`} />
                                <span onClick={() => { setVideoOpen(true); setCurrentVideo(link.link as string) }} className={`absolute p-2 md:p-4 xl:p-6 group rounded-full bg-white cursor-pointer shadow-2xl`}><FaPlay className={`group-hover:text-blue-500 duration-200 ease-in-out`} /></span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page