'use client'

import { documentList } from "@/data/documents";
import { designList } from "@/data/photo-design";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function page() {

    function DesignContent(){

    const [option, setOption] = useState('design');
    const searchParams = useSearchParams();

    const openLink = (link: string) => {
        window.open(link, '_blank');
    }

    useEffect(() => {
      const search = searchParams.get('type');
      if (!search) {
        setOption('design');
        return;
      }
      setOption(search === 'document' ? 'document' : 'design');
    }, []);

    return (
        <>
            <div className={`w-full bg-[#080808] relative h-auto flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Studio</Link>
                </div>

                <div className={`w-auto mt-20 xl:mt-28 flex justify-center items-center gap-3 rounded-full border border-gray-300 p-1`}>
                    <p onClick={() => setOption('design')} className={`${option === 'design' ? "text-black bg-[#B2FF6E]" : "bg-transparent text-white"} cursor-pointer px-5 py-2 rounded-full font-Michroma text-[12px] xl:text-lg`}>Design</p>
                    <p onClick={() => setOption('document')} className={`${option === 'document' ? "text-black bg-[#B2FF6E]" : "bg-transparent text-white"} cursor-pointer px-5 py-2 rounded-full font-Michroma text-[12px] xl:text-lg`}>Documentation</p>
                </div>

                {option === 'design' && <div className={`w-[95%] h-auto py-5 lg:px-3 columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
                    {designList.map((design, index) => {
                        return <img onClick={() => openLink(design)} key={index} src={design} className={`h-auto cursor-pointer my-5 rounded-lg break-inside-avoid`} />
                    })}
                </div>}

                {option === 'document' && <div className={`w-[95%] min-h-screen py-5 lg:px-3 columns-2 md:columns-3 lg:columns-4 overflow-auto`}>
                    {documentList.map((doc, index) => {
                        return <div key={index} className={`w-auto duration-300 ease-in-out cursor-pointer bg-transparent h-auto px-2 py-2 rounded-xl flex flex-col justify-start items-center gap-2`}>
                            <img onClick={() => openLink(doc.link)} src={doc.thumbnail} className={`h-auto rounded-xl cursor-pointer`} />
                        </div>
                    })}
                </div>}

            </div>
        </>
     )
    }

    return (
        <>
          <Suspense fallback={<div className={`min-h-screen w-full bg-[#080808] flex justify-center items-center`}>Loading...</div>}>
            <DesignContent />
          </Suspense>
        </>
  )
    
}


export default page;
