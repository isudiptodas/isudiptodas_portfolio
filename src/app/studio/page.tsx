'use client'

import { designList, imageList } from "@/data/work";
import { useState } from "react";
import Link from 'next/link';

function page() {

  const [option, setOption] = useState('photo');

  const openLink = (link:string) => {
    window.open(link, '_blank');
  }

  return (
    <>
      <div className={`w-full relative h-screen bg-[#111111] overflow-y-hidden flex flex-col justify-start items-center pt-5`}>
        <Link href='/' className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</Link>

        <div className={`w-[95%] fixed py-3 border-[2px] border-neutral-700 rounded-full overflow-x-auto px-3 mt-16 h-auto flex justify-start md:justify-center items-center gap-3`}>
          <p onClick={() => setOption('photo')} className={`w-auto ${option === 'photo' ? " bg-[#B2FF6E] text-black font-bold" : " bg-transparent text-white "} rounded-full py-3 px-3 text-[10px] md:text-sm xl:text-lg cursor-pointer tracking-widest font-Michroma`}>Photography</p>
          <p onClick={() => setOption('design')} className={`w-auto ${option === 'design' ? " bg-[#B2FF6E] text-black font-bold" : " bg-transparent text-white "} rounded-full py-3 px-3 text-[10px] md:text-sm xl:text-lg cursor-pointer tracking-widest font-Michroma`}>Design</p>
          <p onClick={() => setOption('video')} className={`w-auto ${option === 'video' ? "bg-[#B2FF6E] text-black font-bold" : "bg-transparent text-white"} rounded-full py-3 px-3 text-[10px] md:text-sm xl:text-lg cursor-pointer tracking-widest font-Michroma`}>Video</p>
        </div>

        {option === 'photo' && <div className={`w-[90%] h-auto py-5 px-2 mt-36 lg:px-5 bg-[#111111] columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
          {imageList.map((image, index) => {
            return <img onClick={() => openLink(image)} key={index} src={image} className={`h-auto cursor-pointer my-5 rounded-lg break-inside-avoid`} />
          })}
        </div>}

        {option === 'design' && <div className={`w-[90%] h-auto py-5 px-2 mt-36 lg:px-5 bg-[#111111] columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
          {designList.map((design, index) => {
            return <img onClick={() => openLink(design)} key={index} src={design} className={`h-auto cursor-pointer my-5 rounded-lg break-inside-avoid`} />
          })}
        </div>}

        {option === 'video' && <div className={`w-[90%] h-auto py-5 px-2 mt-36 lg:px-5 bg-[#111111] flex flex-col justify-start items-center overflow-auto`}>
          <p className={`w-full text-center font-Michroma text-[10px] md:text-lg lg:text-4xl font-bold text-white tracking-widest`}>Coming Soon</p>
        </div>}

      </div>
    </>
  )

}

export default page;









