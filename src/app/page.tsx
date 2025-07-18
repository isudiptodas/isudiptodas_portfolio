'use client'

import { SiGooglegemini } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { projectList } from "@/data/projectList";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import { useState } from "react";
import CountUp from 'react-countup';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function page() {

  const [loaded, setLoaded] = useState(false);
  
  const navigate = (link: string) => {
    if (link.startsWith(`https`)) {
      window.open(link, '_blank');
    }
    else {
      window.open(`mailto:${link}`, '_blank');
    }
  }

  const animate = () => {
    gsap.fromTo('#text-1', {
      x: "-200",
    }, {
      x: "0",
      duration: 1.4,
      ease: "power2.inOut"
    });
    gsap.fromTo('#text-2', {
      x: "200",
    }, {
      x: "0",
      duration: 1.4,
      ease: "power2.inOut"
    });

    gsap.fromTo('#quotes p', {
      opacity: 0,
    }, {
      delay: 0.2,
      opacity: 1,
      duration: 1,
      stagger: 0.3
    })
  }

  useGSAP(() => {
    gsap.fromTo('#project', {
      opacity: 0,
      y: -10,
      scale: 0.7,
    },{
      opacity: 1.1,
      ease: "power2.inOut",
      scale: 1,
      y: 0,
      stagger: 0.8,
      duration: 1.7,
      scrollTrigger: {
        trigger: "#project",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true
      }
    });

    gsap.fromTo('#design', {
      opacity: 0,
      x: "-30",
      scale: 0.7,
    },{
      opacity: 1.1,
      ease: "power2.inOut",
      scale: 1,
      x: 0,
      duration: 1.7,
      scrollTrigger: {
        trigger: "#design",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true
      }
    });
  });

  return (
    <>

      <div className={`absolute rounded-b-2xl ${loaded ? "-translate-y-full" : "translate-y-0"} duration-500 ease-in-out top-0 w-full h-screen bg-[#0D1BC3] overflow-hidden z-40 flex justify-center items-center`}>
        <p className={`font-Michroma text-[#B2FF6E] font-semibold text-lg lg:text-2xl`}><CountUp start={0} duration={4} end={100} onEnd={() => { setLoaded(true); animate() }} /></p>
      </div>

      <div className={`overflow-hidden ${loaded ? "block" : "hidden"} h-auto w-full flex flex-col justify-start items-center relative`}>

        {/* hero section */}
        <div className={`w-full h-screen z-10 bg-[#111111] flex flex-col justify-center items-center relative overflow-hidden gap-3`}>
          <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>

          <h1 id="text-1" className={`text-white text-start font-Zen-Dots text-3xl sm:text-6xl w-full pl-12 md:pl-16 lg:pl-44 xl:pl-56 overflow-hidden`}>DESIGNER</h1>
          <h1 id="text-2" className={`text-white text-end font-Zen-Dots text-3xl w-full sm:text-6xl pr-12 md:pr-16 lg:pr-44 xl:pr-56 overflow-hidden`}>DEVELOPER</h1>

          <div id="quotes" className={`w-full absolute bottom-0 py-8 md:py-12 px-5 grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-3`}>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>UI DESIGN</p>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>GRAPHIC DESIGN</p>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>WEB DEVELOPMENT</p>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>AI INTEGRATION</p>
          </div>
        </div>

        {/* about section */}
        <div className={`w-full overflow-hidden flex flex-col justify-start items-start bg-[#0D1BC3] relative`}>

          {/* neon strip */}
          <div className={`w-full overflow-hidden py-4 bg-[#B2FF6E] flex justify-center items-center gap-5`}>

            <Marquee speed={70}>
              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>UI DESIGN</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>LLM</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>RAG</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>POSTER DESIGN</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>WEB DEVELOPMENT</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>CLOUD</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>VIDEO EDITING</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>


              {/* <h1 className={`font-Zen-Dots text-black text-3xl shrink-0`}>LLM</h1>
              <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>

              <h1 className={`font-Zen-Dots text-black text-3xl shrink-0`}>CLOUD</h1>
              <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>

              <h1 className={`font-Zen-Dots text-black text-3xl shrink-0`}>POSTER DESIGN</h1>
              <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>

              <h1 className={`font-Zen-Dots text-black text-3xl shrink-0`}>WEB ANIMATIONS</h1>
              <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>

              <h1 className={`font-Zen-Dots text-black text-3xl shrink-0`}>VIDEO EDITING</h1>
              <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span> */}
            </Marquee>
          </div>

          <div className={`py-16 lg:py-28 px-5 w-full z-20 md:px-12 flex flex-col justify-start items-start gap-4`}>
            <h3 className={`text-white font-Michroma text-xl md:text-2xl w-full text-start font-semibold`}>ABOUT ME</h3>
            <p className={`text-white font-Michroma text-[10px] md:text-sm w-full text-start`}>I’m a passionate full-stack developer with over 2 years of hands
              on experience on MERN stack, NextJS, SpringBoot specializing in building dynamic and responsive user interfaces.
              Currently focusing on building AI applications using LLMs and diving deep in the AI world.
            </p>
            <p className={`text-white font-Michroma text-[10px] md:text-sm font-semibold mt-2 w-full text-start`}>What's great in me ?</p>

            <p className={`text-white font-Michroma text-[10px] md:text-sm mt-2 w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> I can simplify complex topics in an easy and fun way.</p>
            <p className={`text-white font-Michroma text-[10px] md:text-sm w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> With me development can be as fun as playing super mario.</p>
            <p className={`text-white font-Michroma text-[10px] md:text-sm w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> I not just build applications, but instead focus on building new solutions for the problems I faced. </p>
            <p className={`text-white font-Michroma text-[10px] md:text-sm w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> I am always curious to learn new things, try new tech stack and implement them in my way. </p>
          </div>
        </div>

        {/* tech stack */}
        <div className={`w-full px-5 md:px-12 bg-[#0D1BC3] flex flex-col justify-start items-center gap-3 py-10`}>
          <h3 className={`text-white font-Michroma text-xl md:text-2xl w-full text-center font-semibold`}>TECH STACK WORKED WITH</h3>

          {/* grids */}
          <div className={`w-full h-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5`}>

            <div className={`bg-white/40 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-semibold text-[#76fe00] text-sm`}>PROGRAMMING LANGUAGES</h3>
              <p className="w-full text-center mt-5 font-Urbanist text-white text-sm">C++, Java</p>
            </div>
            <div className={`bg-white/40 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-semibold text-[#76fe00] text-sm`}>FRONTEND</h3>
              <p className="w-full text-center mt-5 font-Urbanist text-white text-sm">HTML, CSS, JavaScript, TypeScript, TailwindCSS, ReactJs, NextJs</p>
            </div>
            <div className={`bg-white/40 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-semibold text-[#76fe00] text-sm`}>BACKEND</h3>
              <p className="w-full text-center mt-5 font-Urbanist text-white text-sm">NodeJs, ExpressJs, SpringBoot, Supabase</p>
            </div>
            <div className={`bg-white/40 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-semibold text-[#76fe00] text-sm`}>DESIGN TOOLS</h3>
              <p className="w-full text-center mt-5 font-Urbanist text-white text-sm">Canva, Figma, Adobe Lightroom</p>
            </div>
            <div className={`bg-white/40 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-semibold text-[#76fe00] text-sm`}>DATABASES</h3>
              <p className="w-full text-center mt-5 font-Urbanist text-white text-sm">MySQL, MongoDB, Datastax, NeonDB</p>
            </div>
            <div className={`bg-white/40 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-semibold text-[#76fe00] text-sm`}>MISC</h3>
              <p className="w-full text-center mt-5 font-Urbanist text-white text-sm">ArcJet, Docker, Drizle, Prisma</p>
            </div>
          </div>
        </div>

        {/* projects */}
        <div className={`w-full h-auto flex justify-center items-start pt-5 bg-[#0D1BC3]`}>
          <div className={`w-full h-auto flex flex-col justify-start items-center bg-white rounded-t-full pt-24 pb-12 `}>
            <h3 className={`text-black font-Michroma text-xl md:text-2xl px-24 w-full text-center font-semibold`}>EXPLORE PROJECTS</h3>

            <div className={`w-full flex flex-col px-5 md:px-14 lg:px-20 justify-start items-center gap-8 mt-10 md:mt-16 xl:mt-24`}>
              {projectList.map((list, index) => {
                return <div id="project" key={index} className={`w-[80%] lg:w-[70%] rounded-lg bg-[#d9d9d971] flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-2 md:gap-4 shadow-lg py-2 px-2`}>
                  <div className={`w-full md:w-[30%] h-32 md:h-36 rounded-lg overflow-hidden`}>
                    <img src={list.image} className={`h-full w-full object-cover`} />
                  </div>
                  <div className={`w-full md:w-[70%] flex flex-col justify-start items-start mt-2 md:mt-0`}>
                    <p className={`text-black w-full text-start font-Michroma capitalize text-sm font-semibold`}>{list.name}</p>
                    <p className={`text-black w-full text-start font-Michroma text-[10px]`}>{list.tech}</p>
                    <p className={`text-black w-full text-start font-Urbanist text-[10px] mt-2`}>{list.desc}</p>

                    <div className={`w-full flex justify-start items-center gap-3 py-2 md:py-0 md:mt-3`}>
                      <span className={`text-white text-[10px] font-Urbanist hover:opacity-70 hover:scale-95 duration-200 ease-in-out bg-black px-4 rounded-full py-1 cursor-pointer`} onClick={() => navigate(list.github)}>Github</span>
                      <span className={`text-black text-[10px] font-Urbanist hover:opacity-70 hover:scale-95 duration-200 ease-in-out bg-[#76fe00] ${list.deployed ? "block" : "hidden"} px-4 rounded-full py-1 flex justify-center items-center gap-3 cursor-pointer`} onClick={() => navigate(list?.live)}>Live <TiLocationArrow /></span>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>

        {/* design */}
        <div className={`w-full bg-white py-10 flex justify-center items-center`}>
          <div id="design" className={`w-[80%] md:w-[60%] h-48 lg:h-56 rounded-xl relative bg-[#76fe00] overflow-hidden`}>
            <div className={`w-[80%] h-full absolute left-0 bg-gradient-to-r from-[#76fe00] to-transparent z-20 flex flex-col justify-center items-start px-5`}>
              <h1 className={`w-full text-start font-Michroma text-xl lg:text-2xl text-white font-bold`}>Explore My Design Portfolio</h1>
              <p className={`w-auto text-start font-Michroma text-[10px] md:text-sm text-black px-4 py-2 mt-2 rounded-full flex justify-center items-center gap-3 bg-white cursor-pointer hover:scale-95 duration-200 ease-in-out`} onClick={() => navigate('https://www.behance.net/sudipto_das')}>View on Behance <TiLocationArrow /></p>
            </div>
            <img src='/assets/design.jpg' className={`h-full w-full object-cover`} />
          </div>
        </div>

        <div className={`w-full bg-white py-7 md:py-12 flex justify-center items-center`}>
          <Link href='/cv_sudipto.pdf' download="/cv_sudipto.pdf" className={`w-auto px-5 py-2 hover:scale-95 duration-200 ease-in-out cursor-pointer bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white font-Michroma text-sm md:text-lg font-light`}>Download CV</Link>
        </div>

        {/* footer */}
        <div className={`w-full h-auto flex justify-center items-center px-7 py-8 md:py-10`}>
          <div className={`w-full md:w-[90%] flex flex-col justify-center items-center pt-5 pb-5 gap-3 rounded-lg lg:rounded-xl bg-[#b9b9b985]`}>
            <p className={`w-full text-center font-Michroma text-[10px] text-black tracking-[5px]`}>ISUDIPTODAS</p>
            <p className={`w-full text-center font-black font-Michroma text-xl sm:text-3xl lg:text-4xl xl:ext-6xl sm:mt-4 text-black`}>LET'S GET IN TOUCH</p>
            <div className={`w-full mt-5 md:mt-10 px-5 md:px-10 grid grid-cols-2 md:grid-cols-5 justify-items-center gap-5`}>
              <p className={`w-full font-Michroma text-center text-sm xl:text-lg px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 ease-in-out text-black cursor-pointer`} onClick={() => navigate('https://www.linkedin.com/in/sudiptodas-developer')}>LinkedIn</p>
              <p className={`w-full font-Michroma text-center text-sm xl:text-lg px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 ease-in-out text-black cursor-pointer`} onClick={() => navigate('https://github.com/isudiptodas')}>Github</p>
              <p className={`w-full font-Michroma text-center text-sm xl:text-lg px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 ease-in-out text-black cursor-pointer`} onClick={() => navigate('https://www.behance.net/sudipto_das')}>Behance</p>
              <p className={`w-full font-Michroma text-center text-sm xl:text-lg px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 ease-in-out text-black cursor-pointer`} onClick={() => navigate('isudiptodas10@gmail.com')}>Gmail</p>
              <p className={`w-full font-Michroma text-center text-sm xl:text-lg px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 ease-in-out text-black cursor-pointer`} onClick={() => navigate('isudiptodas01@outlook.com')}>Outlook</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default page
