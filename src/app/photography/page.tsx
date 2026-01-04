'use client'

import { imageList } from "@/data/photo-design";
import Link from "next/link";

function page() {

    const openLink = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div className={`w-full bg-[#080808] relative h-auto flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Studio</Link>
                </div>
                <div className={`w-[95%] h-auto py-5 mt-14 lg:px-3 columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
                    {imageList.map((image, index) => {
                        return <img onClick={() => openLink(image)} key={index} src={image} className={`h-auto cursor-pointer my-5 rounded-lg break-inside-avoid`} />
                    })}
                </div>
            </div>
        </>
    )
}

export default page