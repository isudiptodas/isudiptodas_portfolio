'use client'

import Link from "next/link";
import { extensions } from "@/data/extensions";
import { FaDownload } from "react-icons/fa6";
import { FaChrome } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function page() {

    const platformIcons: Record<string, React.ReactNode> = {
        "Google Chrome": <FaChrome />,
        "Visual Studio Code": <VscVscode />
    }

    return (
        <>
            <div className={`w-full bg-[#080808] relative min-h-screen flex flex-col justify-start items-center pb-10 overflow-hidden`}>
                <p className={`w-full select-none absolute top-6 text-center text-white font-Red-Hat-Display tracking-[0.3rem] text-[10px] md:text-sm`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Red-Hat-Display text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Section</Link>
                </div>
                <div className={`w-[95%] h-auto py-5 mt-20 px-3`}>
                    <div className={`w-full px-3 h-auto flex flex-col justify-start items-center gap-2 mb-12`}>
                        <p className={`w-auto select-none px-4 py-2 rounded-full border border-white/10 bg-zinc-900 text-white/60 font-Red-Hat-Display text-[8px] md:text-[12px] tracking-[0.2rem] uppercase`}>Extensions</p>
                        <p className={`w-full select-none mt-2 text-center text-white font-Red-Hat-Display font-semibold text-xl md:text-4xl xl:text-5xl`}>Enhanced productivity & development experience</p>
                    </div>

                    <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5`}>
                        {extensions.length > 0 && extensions.map((item, index) => {
                            return <div key={index} className={`w-full h-auto flex flex-col justify-center items-center px-[1px] pb-[1px] rounded-xl bg-zinc-800`}>
                                <p className={`w-full text-start text-white text-[8px] opacity-50 py-2 px-3 select-none flex justify-start items-center gap-2`}> <span className={`text-[12px]`}>{platformIcons[item.platform]}</span> {item.platform}</p>
                                <div className={`w-full h-full rounded-xl bg-zinc-900 flex flex-col justify-between items-center px-3 py-3`}>
                                    <div className={`w-full flex justify-start items-center gap-3`}>
                                        <img src={item.icon} className={`h-6`} />
                                        <p className={`w-full text-start text-white font-Red-Hat-Display font-semibold text-xl lg:text-lg select-none`}>{item.name}</p>
                                    </div>
                                    <p className={`w-full text-start text-white font-light text-[10px] opacity-65 my-3 select-none`}>{item.desc}</p>
                                    <p onClick={() => window.open(item.link, '_blank')} className={`w-full ${item.linkAvailable ? "block" : "hidden"} select-none py-3 active:opacity-70 duration-200 ease-in-out font-semibold text-center bg-white text-black flex justify-center items-center gap-2 text-[10px] cursor-pointer rounded-full`}>Download <FaDownload /></p>
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
