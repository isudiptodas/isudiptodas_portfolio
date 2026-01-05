'use client'

import { SiGooglegemini } from "react-icons/si";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useState, useEffect } from "react";
import CountUp from 'react-countup';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { freelance } from "@/data/freelance";
import { works } from "@/data/work";
import { FaLocationArrow } from "react-icons/fa";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function page() {

  const [loaded, setLoaded] = useState(false);
  const [hiringVisible, setHiringVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hiringVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hiringVisible]);

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

    gsap.fromTo('#design', {
      opacity: 0,
      x: "-30",
      scale: 0.7,
    }, {
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

      <div className={`absolute rounded-b-2xl ${loaded ? "-translate-y-full" : "translate-y-0"} duration-500 ease-in-out top-0 w-full h-screen bg-gradient-to-br from-black via-[#040b5d] to-[#0D1BC3] overflow-hidden z-40 flex justify-center items-center`}>
        <p className={`font-Michroma text-[#B2FF6E] font-semibold text-lg lg:text-2xl`}><CountUp start={0} duration={3} end={100} onEnd={() => { setLoaded(true); animate() }} /></p>
      </div>

      <div className={`overflow-hidden ${loaded ? "block" : "hidden"} h-auto w-full flex flex-col justify-start items-center relative`}>

        {/* hero section */}
        <div className={`w-full h-screen z-10 bg-[#080808] flex flex-col justify-center items-center relative overflow-hidden gap-3`}>
          <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>

          <h1 id="text-1" className={`text-white text-start font-Cronde italic text-4xl sm:text-7xl w-full pl-12 md:pl-16 lg:pl-44 xl:pl-56 overflow-hidden`}>DESIGNER</h1>
          <h1 id="text-2" className={`text-white text-end font-Zen-Dots text-3xl w-full sm:text-6xl pr-12 md:pr-16 lg:pr-44 xl:pr-56 overflow-hidden`}>DEVELOPER</h1>

          <div id="quotes" className={`w-full absolute bottom-0 py-8 md:py-12 px-5 grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-3`}>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>WEB DEVELOPMENT</p>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>GRAPHIC DESIGN</p>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>VIDEO EDITING</p>
            <p className={`text-white font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>DEVOPS</p>
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
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>GRAPHIC DESIGN</h1>
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
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>STORYTELLING</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>PHOTOGRAPHY</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>VIDEO EDITING</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>

              <div className={`w-auto px-3 flex justify-center items-center gap-5`}>
                <h1 className={`font-Zen-Dots text-black text-3xl lg:text-4xl xl:text-5xl shrink-0`}>DEVOPS</h1>
                <span className={`p-2 rounded-full bg-transparent border-[2px] border-black`}><SiGooglegemini /></span>
              </div>
            </Marquee>
          </div>

          <div className={`pt-16 pb-10 lg:pt-28 lg:pb-16 px-5 w-full z-20 md:px-12 flex flex-col justify-start items-start gap-4`}>
            <h3 className={`text-white font-Michroma text-xl md:text-2xl w-full text-start font-semibold`}>ABOUT ME</h3>
            <p className={`text-white text-[10px] md:text-sm w-full text-start`}>I’m a passionate full-stack developer with over 2 years of hands
              on experience on MERN stack, NextJS, SpringBoot specializing in building dynamic and responsive user interfaces.
              Currently focusing on devops and building high level systems that scale to millions.
            </p>
            <p className={`text-white font-Michroma text-[10px] md:text-sm font-semibold mt-2 w-full text-start`}>What's great in me ?</p>

            <p className={`text-white text-[10px] md:text-sm mt-2 w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> I can simplify complex topics in an easy and fun way.</p>
            <p className={`text-white text-[10px] md:text-sm w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> With me development can be as fun as playing super mario.</p>
            <p className={`text-white text-[10px] md:text-sm w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> I not just build applications, but instead focus on building new solutions for the problems I faced. </p>
            <p className={`text-white text-[10px] md:text-sm w-full text-start flex justify-start items-center gap-3`}><SiGooglegemini /> I am always curious to learn new things, try new tech stack and implement them in my way. </p>

            <p className={`text-white mt-3 text-[10px] md:text-sm w-full text-start`}>
              Beside this, I also have a lot of interest in photography, cinematography, editing, storytelling and making digital designs.
            </p>

          </div>
        </div>

        {/* tech stack */}
        <div className={`w-full px-5 md:px-12 bg-[#0D1BC3] flex flex-col justify-start items-center gap-3 pt-5 pb-10`}>
          <h3 className={`text-white font-Michroma text-xl md:text-2xl w-full text-center font-semibold`}>TECH STACK WORKED WITH</h3>

          {/* grids */}
          <div className={`w-full h-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5`}>

            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>PROGRAMMING LANGUAGES</h3>
              <p className="w-full text-center mt-5 text-white text-sm">C++, Java</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>FRONTEND</h3>
              <p className="w-full text-center mt-5 text-white text-sm">HTML, CSS, JavaScript, TypeScript, TailwindCSS, ReactJs, NextJs</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>BACKEND</h3>
              <p className="w-full text-center mt-5 text-white text-sm">NodeJs, ExpressJs, SpringBoot, Supabase</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>DESIGN & MODELING</h3>
              <p className="w-full text-center mt-5 text-white text-sm">Canva, Figma, Affinity, Spline</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>DATABASES</h3>
              <p className="w-full text-center mt-5 text-white text-sm">MySQL, MongoDB, Datastax, NeonDB, Redis</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>OTHER TOOLS</h3>
              <p className="w-full text-center mt-5 text-white text-sm">ArcJet, Drizzle, Prisma</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>CLOUD</h3>
              <p className="w-full text-center mt-5 text-white text-sm">Docker, AWS (S3, EC2, DynamoDB, SES, IAM)</p>
            </div>
            <div className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
              <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>MESSAGING QUEUES</h3>
              <p className="w-full text-center mt-5 text-white text-sm">BullMQ</p>
            </div>
          </div>
        </div>

        {/* work */}
        <div className={`w-full h-auto px-5 md:px-12 flex flex-col justify-start items-center pt-10`}>
          <h3 className={`text-black font-Michroma text-xl md:text-2xl w-full text-center font-semibold`}>EXPLORE WORK</h3>
          
          <div className={`w-full py-10 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4`}>
            {works.map((item, index) => {
              return <div key={index} className={`w-full rounded-2xl bg-black h-[30vh] md:h-[50vh] lg:h-[60vh] relative overflow-hidden flex justify-center items-end`}>
                <img src={item.image} className={`opacity-40 absolute h-full object-cover`} />
                <div className={`w-full pb-5 h-auto flex flex-col justify-center items-center gap-5`}>
                  <p className={`text-white z-20 w-full font-Michroma text-center text-xl`}>{item.title}</p>
                   <div onClick={() => router.push(item.link)} className={`w-[90%] inset-shadow-sm inset-shadow-green-800 hover:opacity-70 duration-200 ease-in-out cursor-pointer bg-[#76fe00] h-auto flex justify-center items-center py-3 rounded-full relative`}>
                      <p className={`text-black text-sm font-bold cursor-pointer`}>Visit</p>
                       <span className={`text-[#76fe00] absolute rounded-full p-2 right-2 text-[12px] bg-black`}><FaLocationArrow /></span>
                   </div>
                </div>
              </div>
            })}
          </div>

        </div>


        {/* freelancing section */}
        <div className={`w-full h-auto flex flex-col justify-start items-center py-5`}>
          <h1 className={`w-full mb-4 text-center bg-gradient-to-b from-zinc-900 via-zinc-500 to-white font-Michroma font-bold bg-clip-text text-transparent text-4xl md:text-5xl lg:text-4xl`}>WHAT I'M OFFERING</h1>

          <div className={`w-full h-auto pt-4 pb-5 px-5 lg:px-8 flex flex-col md:flex-row justify-start lg:justify-between items-center gap-5 lg:gap-10`}>
            {freelance.map((item) => {
              return <div key={item.topic} className={`w-full border border-black py-5 px-5 rounded-md hover:shadow-2xl shadow-md duration-200 ease-in-out cursor-default flex flex-col justify-start items-start`}>
                <h1 className={`w-full text-start font-Zen-Dots text-black text-lg lg:text-xl`}>{item.topic}</h1>
                <h1 className={`w-full mb-2 text-start font-Urbanist text-gray-600 text-sm lg:text-lg`}>{item.goodAt}</h1>
                {item.list.map((line, index) => {
                  return <p key={index} className={`w-full flex justify-start items-center gap-2 text-[10px] lg:text-sm text-black`}><span className={`text-green-600 text-[12px] xl:text-lg`}>✓</span> {line}</p>
                })}
                <p className={`w-full py-2 text-start flex justify-start items-center gap-2 text-sm lg:text-lg`}><span className={`font-bold`}>$</span> Contact for pricing details</p>
                <p onClick={() => setHiringVisible(true)} className={`w-full py-3 mt-2 rounded-md bg-black text-white font-semibold text-center text-sm cursor-pointer active:opacity-75 duration-200 ease-in-out`}>Work with me</p>
              </div>
            })}
          </div>
        </div>

        {/* hiring popup */}
        <div onClick={() => setHiringVisible(false)} className={`w-full ${hiringVisible ? "scale-100" : "scale-0"} duration-300 ease-in-out h-screen fixed backdrop-blur-xl bg-white/10 z-30 flex justify-center items-center`}>
            <div className={`w-[90%] md:w-auto h-auto px-5 lg:px-8 py-5 lg:py-8 bg-white rounded-lg flex flex-col justify-center items-center`}>
                <h1 className={`w-full text-center text-4xl lg:text-6xl font-Urbanist font-bold`}>Connect With Me</h1>
                <h1 className={`w-full text-center text-sm lg:text-lg italic font-Urbanist`}>Let me build something great for you</h1>

                <div className={`w-full py-5 flex justify-between items-center gap-3`}>
                    <p onClick={() => window.open('mailto:isudiptodas01@outlook.com','_blank')} className={`w-full active:opacity-75 duration-150 ease-in-out py-2 lg:py-4 rounded-md flex justify-center items-center gap-2 bg-blue-500 text-white text-sm cursor-pointer`}><span><PiMicrosoftOutlookLogoFill/></span>Outlook</p>
                    <p onClick={() => window.open('mailto:work.sudiptodas@gmail.com','_blank')} className={`w-full active:opacity-75 duration-150 ease-in-out py-2 lg:py-4 rounded-md flex justify-center items-center gap-2 bg-red-500 text-white text-sm cursor-pointer`}><span><BiLogoGmail/></span>Gmail</p>
                </div>
            </div>
        </div>

        <div className={`w-full bg-[#080808] py-10 md:pt-20 md:pb-10 flex justify-center items-center`}>
          <Link href='/cv_sudipto.pdf' download="/cv_sudipto.pdf" className={`w-auto inset-shadow-sm inset-shadow-blue-800 px-5 py-2 hover:scale-95 hover:rounded-4xl duration-200 ease-in-out cursor-pointer bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white font-Michroma text-sm md:text-lg font-light`}>Download CV</Link>
        </div>

        <div className={`w-full bg-[#080808] flex justify-center items-center px-5 py-5`}>
          <div className={`w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent`}></div>
        </div>

        {/* footer */}
        <div className={`w-full h-auto pt-10 pb-16 flex justify-center items-center gap-5 lg:gap-8 bg-[#080808]`}>
          <span onClick={() => navigate('mailto:work.sudiptodas@gmail.com')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><BiLogoGmail /></span>
          <span onClick={() => navigate('mailto:isudiptodas01@outlook.com')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><PiMicrosoftOutlookLogoFill /></span>
          <span onClick={() => navigate('https://github.com/isudiptodas')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaGithub /></span>
          <span onClick={() => navigate('https://www.linkedin.com/in/sudiptodas-developer')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaLinkedin /></span>
          <span onClick={() => navigate('https://www.x.com/isudiptodas')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaSquareXTwitter /></span>
        </div>

      </div>

    </>
  )
}

export default page



