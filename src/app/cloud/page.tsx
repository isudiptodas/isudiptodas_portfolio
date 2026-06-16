'use client'

import { devOpsProjects } from "@/data/projectList";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGitBranchOutline } from "react-icons/io5";

function page() {

  const navigate = (link: string) => {
    window.open(link, '_blank');
  }

  return (
    <>
      <div className={`w-full bg-[#080808] relative min-h-screen flex flex-col justify-start items-center pb-20 overflow-hidden`}>
        <p className={`w-full select-none absolute top-6 text-center text-white font-Red-Hat-Display tracking-[0.3rem] text-[10px] md:text-sm`}>ISUDIPTODAS</p>
        <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
          <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Red-Hat-Display text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Section</Link>
        </div>

        <div className={`w-[95%] h-auto mt-20 md:mt-24 flex flex-col justify-start items-center`}>
          <div className={`w-full h-auto flex flex-col justify-start items-center gap-2 mb-8`}>
            <p className={`w-auto select-none px-4 py-2 rounded-full border border-white/10 bg-zinc-900 text-white/60 font-Red-Hat-Display text-[8px] md:text-[12px] tracking-[0.2rem] uppercase`}>Cloud Projects</p>
            <p className={`w-full select-none mt-2 text-center text-white font-Red-Hat-Display font-semibold text-xl md:text-4xl xl:text-5xl`}>DevOps architecture work</p>
            <p className={`w-full select-none px-4 md:w-[60%] text-center text-white/55 font-Red-Hat-Display text-[8px] md:text-[12px] mt-2`}>Production focused cloud, container and deployment systems designed around automation, observability and scalable service delivery.</p>
          </div>
 
          <div className={`w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 lg:gap-6 px-4`}>
            {devOpsProjects.map((project) => {
              return <div key={project.id} className={`w-full h-auto rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden flex flex-col justify-between items-center shadow-lg hover:border-white/25 duration-200 ease-in-out`}>
                <div className={`w-full h-auto px-4 md:px-5 py-4 flex justify-between items-center border-b border-white/10 bg-zinc-800/70`}>
                  <div className={`w-auto flex justify-start items-center gap-3 relative`}>
                    <p className={`h-10 w-10 rounded-full bg-[#0012ff] text-white flex justify-center items-center font-Red-Hat-Display font-semibold text-sm`}>0{project.id}</p>
                    <div className={`w-auto flex flex-col justify-start items-start`}>
                      <p className={`w-full text-white font-Red-Hat-Display font-semibold text-sm lg:text-xl`}>{project.name}</p>
                    </div>
                  </div>
                </div>

                <div className={`w-full h-full px-4 md:px-5 py-5 flex flex-col justify-between items-center`}>
                  <div className={`w-full h-auto flex flex-wrap justify-start items-center gap-2 mb-6`}>
                    {project.techStack.split(', ').map((tech) => {
                      return <p key={tech} className={`w-auto px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 font-Red-Hat-Display text-[8px] md:text-[10px]`}>{tech}</p>
                    })}
                  </div>

                  <div className={`w-full h-auto rounded-xl border border-white/10 bg-black/25 px-3 md:px-4 py-4`}>
                    <p className={`w-full text-white font-Red-Hat-Display font-semibold text-sm mb-4`}>Architecture</p>
                    <div className={`w-full h-auto flex flex-col justify-start items-center gap-3`}>
                      {project.flow.map((flow, index) => {
                        return <div key={flow} className={`w-full h-auto flex justify-start items-start gap-3`}>
                          <p className={`h-7 w-7 min-w-7 rounded-full bg-white text-black flex justify-center items-center font-Red-Hat-Display font-semibold text-[10px]`}>{index + 1}</p>
                          <div className={`w-full h-auto flex justify-start items-start gap-3`}>
                            <p className={`w-full text-white/65 font-Red-Hat-Display text-[8px] md:text-[10px] leading-5`}>{flow}</p>
                          </div>
                        </div>
                      })}
                    </div>
                  </div>

                  <div className={`w-full h-auto mt-5 flex justify-between items-center gap-4`}>
                    <p onClick={() => navigate(project.githubLink)} className={`w-auto select-none text-blue-400 font-Red-Hat-Display font-semibold cursor-pointer text-[10px] md:text-[10px]`}>View implementation code here</p>
                  </div>
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
