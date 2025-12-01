'use client'

import { designList, imageList } from "@/data/work";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { videoLinks } from "@/data/video";
import { FaPlay } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { BsVectorPen } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { documentList } from "@/data/documents";
import { useSearchParams } from "next/navigation";

function page() {

  const [option, setOption] = useState('');
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<null | string>(null);
  const searchParams = useSearchParams();

  const openLink = (link: string) => {
    window.open(link, '_blank');
  }

  useEffect(() => {

    const search = searchParams.get('type');
    if (!search) {
      setOption('photo');
      return;
    }

    setOption(search);
  }, []);

  return (
    <>
      <div className={`w-full relative h-screen bg-[#111111] overflow-y-hidden flex flex-col justify-start items-center pt-5`}>
        <Link href='/' className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</Link>

        <div className={`w-[95%] md:w-auto fixed py-3 border-[2px] border-neutral-700 rounded-full overflow-x-auto px-3 mt-16 h-auto flex justify-evenly md:justify-center items-center gap-3 md:gap-5`}>
          <p onClick={() => setOption('photo')} className={`w-auto ${option === 'photo' ? " bg-[#B2FF6E] text-black font-bold" : " bg-transparent text-white "} rounded-full py-3 px-3 text-[10px] md:text-sm cursor-pointer tracking-widest font-Michroma flex justify-center items-center gap-2`}>Photography <IoMdPhotos className={`text-lg`} /></p>
          <p onClick={() => setOption('design')} className={`w-auto ${option === 'design' ? " bg-[#B2FF6E] text-black font-bold" : " bg-transparent text-white "} rounded-full py-3 px-3 text-[10px] md:text-sm cursor-pointer tracking-widest font-Michroma flex justify-center items-center gap-2`}>Design <BsVectorPen className={`text-lg`} /></p>
          <p onClick={() => setOption('video')} className={`w-auto ${option === 'video' ? "bg-[#B2FF6E] text-black font-bold" : "bg-transparent text-white"} rounded-full py-3 px-3 text-[10px] md:text-sm cursor-pointer tracking-widest font-Michroma flex justify-center items-center gap-2`}>Video <FaVideo className={`text-lg`} /></p>
          <p onClick={() => setOption('document')} className={`w-auto ${option === 'document' ? "bg-[#B2FF6E] text-black font-bold" : "bg-transparent text-white"} rounded-full py-3 px-3 text-[10px] md:text-sm cursor-pointer tracking-widest font-Michroma flex justify-center items-center gap-2`}>Document <IoDocumentText className={`text-lg`} /></p>
        </div>

        {/* video play box */}
        <div className={`w-full ${videoOpen ? "block" : "hidden"} px-5 pt-10 h-screen flex flex-col justify-start items-center gap-5 top-0 fixed bg-black z-50`}>
          <div className={`w-auto h-[70vh] md:h-[75vh] md:w-1/2 bg-black overflow-hidden rounded-lg`}>
            {currentVideo && <video src={currentVideo as string} className={`h-full w-full`} autoPlay loop muted controls />}
          </div>
          <p onClick={() => { setVideoOpen(false); setCurrentVideo(null) }} className={`w-auto active:opacity-75 duration-150 ease-in-out px-4 text-center py-2 rounded-full text-black bg-white cursor-pointer text-sm md:text-lg`}>Close Video</p>
        </div>

        <div className={`w-full ${videoOpen ? "hidden" : "block"} h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
          <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Studio</Link>
        </div>

        {option === 'photo' && <div className={`w-[90%] h-auto py-5 mt-36 lg:mt-40 lg:px-3 bg-[#111111] columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
          {imageList.map((image, index) => {
            return <img onClick={() => openLink(image)} key={index} src={image} className={`h-auto cursor-pointer my-5 rounded-lg break-inside-avoid`} />
          })}
        </div>}

        {option === 'design' && <div className={`w-[90%] h-auto py-5 mt-36 lg:mt-40 lg:p bg-[#111111] columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
          {designList.map((design, index) => {
            return <img onClick={() => openLink(design)} key={index} src={design} className={`h-auto cursor-pointer my-5 rounded-lg break-inside-avoid`} />
          })}
        </div>}

        {option === 'document' && <div className={`w-[90%] h-auto py-5 mt-36 lg:mt-40 lg:p bg-[#111111] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 overflow-auto`}>
          {documentList.map((doc, index) => {
            return <div key={index} className={`w-auto hover:bg-zinc-800 duration-300 ease-in-out cursor-pointer bg-transparent h-auto px-2 py-2 rounded-xl flex flex-col justify-start items-center gap-2`}>
              <img onClick={() => openLink(doc.link)} src={doc.thumbnail} className={`h-auto rounded-xl cursor-pointer`} />
              <p className={`font-Urbanist text-white text-[10px] md:text-sm xl:text-lg w-full text-start mt-2`}>{doc.name}</p>
            </div>
          })}
        </div>}

        {option === 'video' && <div className={`w-[90%] lg:w-[95%] h-auto py-5 px-2 mt-36 lg:mt-40 lg:px-5 bg-[#111111] flex flex-col justify-start items-center overflow-auto`}>
          <h1 className={`font-Michroma mt-3 border-b-[1px] border-gray-400 pb-5 text-lg font-bold text-white w-full text-start`}>Video Edits</h1>

          <div className={`w-full h-[30vh] md:h-[40vh] lg:h-[60vh] py-4 flex items-center gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory`}>
            {videoLinks.map((link, index) => {
              return <div key={index} className={`shrink-0 snap-center w-auto h-full flex justify-center relative items-center overflow-hidden rounded-2xl bg-neutral-800`}>
                <img src={link.thumbnail as string} className={`h-full w-auto object-cover`} />
                <span onClick={() => { setVideoOpen(true); setCurrentVideo(link.link as string) }} className={`absolute p-2 md:p-4 xl:p-6 group rounded-full bg-white cursor-pointer shadow-2xl`}><FaPlay className={`group-hover:text-blue-500 duration-200 ease-in-out`} /></span>
              </div>
            })}
          </div>
        </div>}

      </div>
    </>
  )

}

export default page;

















