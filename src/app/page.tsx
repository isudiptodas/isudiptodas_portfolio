'use client'

import { SiGooglegemini } from "react-icons/si";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { freelance } from "@/data/freelance";
import { works } from "@/data/work";
import { techStackList } from "@/data/techStack";
import { FaLocationArrow } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { testimonials } from "@/data/testimonials";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";

function page() {

  const [loaded, setLoaded] = useState(true);
  const [hiringVisible, setHiringVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hiringVisible || testimonialVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hiringVisible, testimonialVisible]);

  const navigate = (link: string) => {
    if (link.startsWith(`https`)) {
      window.open(link, '_blank');
    }
    else {
      window.open(`mailto:${link}`, '_blank');
    }
  }

  return (
    <>

      <div className={`absolute rounded-b-2xl ${loaded ? "-translate-y-full" : "translate-y-0"} duration-500 ease-in-out top-0 w-full h-screen bg-gradient-to-br from-black via-[#040b5d] to-[#0D1BC3] overflow-hidden z-40 flex justify-center items-center`}>
        <p className={`font-Michroma text-[#B2FF6E] font-semibold text-lg lg:text-2xl`}><CountUp start={0} duration={3} end={100} onEnd={() => { setLoaded(true); }} /></p>
      </div>

      <div className={`overflow-hidden ${loaded ? "block" : "hidden"} h-auto w-full flex flex-col justify-start items-center relative`}>

        {/* hero section */}
        <div className={`w-full h-screen z-10 bg-[#080808] flex flex-col justify-center items-center relative overflow-hidden gap-3`}>
          <p className={`absolute left-1/2 -translate-x-1/2 top-7 motion-opacity-in-0 motion-duration-[5s] font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>

          <h1 className={`text-white motion-opacity-in-0 motion-blur-in-md text-center font-Cronde text-5xl sm:text-8xl w-full overflow-hidden`}>DESIGNER</h1>
          <h1 className={`text-white motion-opacity-in-0 motion-blur-in-md text-center font-Zen-Dots text-3xl w-full sm:text-6xl overflow-hidden`}>DEVELOPER</h1>

          <div className={`w-auto mt-1 lg:mt-2 motion-blur-in-md flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900`}>
            <div className={`rounded-full bg-green-500 p-1`}></div>
            <p className={`text-white text-[10px] md:text-[12px] lg:text-[14px] `}>Available for work</p>
          </div>

          <div className={`w-full absolute bottom-0 py-8 md:py-12 px-5 grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-3`}>
            <p className={`text-white motion-blur-in-md font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>WEB DEVELOPMENT</p>
            <p className={`text-white motion-blur-in-md font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>GRAPHIC DESIGN</p>
            <p className={`text-white motion-blur-in-md font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>VIDEO EDITING</p>
            <p className={`text-white motion-blur-in-md font-Michroma text-[8px] md:text-[10px] lg:text-sm cursor-pointer`}>DEVOPS</p>
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

          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`pt-16 pb-10 lg:pt-28 lg:pb-16 px-5 w-full z-20 md:px-12 flex flex-col justify-start items-start gap-4`}>
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

          </motion.div>
        </div>

        {/* tech stack */}
        <div className={`w-full px-5 md:px-12 bg-[#0D1BC3] flex flex-col justify-start items-center gap-3 pt-5 pb-10`}>
          <motion.h3 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`text-white font-Michroma text-xl md:text-2xl w-full text-center font-semibold`}>TECH STACK WORKED WITH</motion.h3>

          {/* grids */}
          <div className={`w-full h-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5`}>
            {
              techStackList.map((item, index) => {
                return <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} key={index} className={`bg-white/25 w-full pt-6 pb-8 px-4 flex flex-col justify-start items-center`}>
                  <h3 className={`w-full text-center font-Michroma font-bold text-[#76fe00] text-sm`}>{item.title}</h3>
                  <p className="w-full text-center mt-5 text-white text-sm">{item.items}</p>
                </motion.div>
              })
            }
          </div>
        </div>

        <div className={`w-full bg-[#0D1BC3] h-12 flex justify-center items-center`}>
          <div className={`h-full w-full bg-white rounded-t-4xl`}></div>
        </div>

        {/* work */}
        <div className={`w-full h-auto px-5 lg:px-8 flex flex-col justify-start items-center`}>
          <motion.h3 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`text-black font-Michroma text-xl md:text-2xl w-full text-center font-semibold`}>EXPLORE WORK</motion.h3>

          <div className={`w-full py-10 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4`}>
            {works.map((item, index) => {
              return <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} key={index} className={`w-full rounded-2xl bg-black h-[30vh] md:h-[50vh] relative overflow-hidden flex justify-center items-end`}>
                <img src={item.image} className={`opacity-40 absolute h-full object-cover`} />
                <div className={`w-full pb-5 h-auto flex flex-col justify-center items-center gap-5`}>
                  <p className={`text-white z-20 w-full font-Michroma text-center text-xl`}>{item.title}</p>
                  <div onClick={() => router.push(item.link)} className={`w-[90%] active:opacity-70 inset-shadow-sm inset-shadow-green-800 hover:opacity-70 duration-200 ease-in-out cursor-pointer bg-[#76fe00] h-auto flex justify-center items-center py-3 rounded-full relative`}>
                    <p className={`text-black text-sm font-bold cursor-pointer`}>Visit</p>
                    <span className={`text-[#76fe00] absolute rounded-full p-2 right-2 text-[12px] bg-black`}><FaLocationArrow /></span>
                  </div>
                </div>
              </motion.div>
            })}
          </div>

        </div>


        {/* freelancing section 
        <div className={`w-full h-auto flex flex-col justify-start items-center py-5`}>
          <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.8 }} className={`w-full mb-4 text-center font-Michroma font-bold text-black text-xl md:text-2xl`}>WHAT I'M OFFERING</motion.h1>

          <div className={`w-full h-auto pt-4 pb-5 px-5 lg:px-8 flex flex-col md:flex-row justify-start lg:justify-between items-center gap-5 lg:gap-10`}>
            {freelance.map((item) => {
              return <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.8 }} key={item.topic} className={`w-full border border-black py-5 px-5 rounded-xl hover:shadow-2xl shadow-md duration-200 ease-in-out cursor-default flex flex-col justify-start items-start`}>
                <h1 className={`w-full text-start font-Zen-Dots text-black text-lg lg:text-xl`}>{item.topic}</h1>
                <h1 className={`w-full mb-2 text-start font-Urbanist text-gray-600 text-sm lg:text-lg`}>{item.goodAt}</h1>
                {item.list.map((line, index) => {
                  return <p key={index} className={`w-full flex justify-start items-center gap-2 text-[10px] lg:text-sm text-black`}><span className={`text-green-600 text-[12px] xl:text-lg`}>✓</span> {line}</p>
                })}
                <p className={`w-full py-2 text-start flex justify-start items-center gap-2 text-sm lg:text-lg`}><span className={`font-bold`}>$</span> Contact for pricing details</p>
                <p onClick={() => setHiringVisible(true)} className={`w-full py-3 mt-2 rounded-md bg-black text-white font-semibold text-center text-sm cursor-pointer active:opacity-75 duration-200 ease-in-out`}>Work with me</p>
              </motion.div>
            })}
          </div>
        </div> */}

        {/* hiring popup 
        <div style={{
          background: "#000000",
          backgroundImage: `
              radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }} onClick={() => setHiringVisible(false)} className={`w-full ${hiringVisible ? "translate-y-0" : "translate-y-full"} duration-500 ease-in-out h-screen fixed z-30 flex justify-center items-center`}>
          <div onClick={(e) => e.stopPropagation()} className={`w-[90%] md:w-1/2 xl:w-[35%] h-auto px-3 lg:px-5 py-5 bg-black border border-blue-900 bg-linear-to-b from-zinc-950 to-[#010133] rounded-xl lg:rounded-2xl flex flex-col justify-center items-center`}>
            <h1 className={`w-full text-start text-white text-2xl lg:text-3xl font-Urbanist font-bold`}>Connect With Me</h1>
            <p className={`w-full text-start font-light text-white text-sm lg:text-lg italic font-Urbanist`}>Let me build something great for you</p>

            <div className={`w-full py-3 flex justify-between items-center gap-3`}>
              <p onClick={() => window.open('mailto:isudiptodas01@outlook.com', '_blank')} className={`w-full active:opacity-75 duration-150 ease-in-out py-2 lg:py-3 rounded-md flex justify-center items-center gap-2 bg-linear-to-b from-blue-400 via-blue-700 to-blue-900 text-white text-sm cursor-pointer`}><span><PiMicrosoftOutlookLogoFill /></span>Outlook</p>
              <p onClick={() => window.open('mailto:work.sudiptodas@gmail.com', '_blank')} className={`w-full active:opacity-75 duration-150 ease-in-out py-2 lg:py-3 rounded-md flex justify-center items-center gap-2 bg-linear-to-b from-red-400 via-red-700 to-red-900 text-white text-sm cursor-pointer`}><span><BiLogoGmail /></span>Gmail</p>
            </div>

            <p className={`w-full text-start text-white text-[12px] lg:text-sm opacity-65 my-3 font-Urbanist`}>Or</p>

            <h1 className={`w-full text-start text-white text-2xl lg:text-3xl font-Urbanist font-bold`}>Book a free 1:1 session</h1>
            <p className={`w-full text-start font-light text-white text-sm lg:text-lg italic font-Urbanist`}>Let's discuss about a new idea</p>
            <p onClick={() => window.open('https://cal.com/sudipto-das-rrmeav/quick-call')} className={`w-full rounded-md active:opacity-70 duration-200 ease-in-out text-sm mt-2 py-2 lg:py-3 bg-white text-black flex justify-center items-center gap-2 hover:gap-4 cursor-pointer`}>Schedule call <FaExternalLinkAlt /></p>
          </div>
        </div>  */}

        {/* testimonial section */}
        <div className={`w-full h-auto bg-white flex flex-col justify-start items-center pt-10 pb-5`}>
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`w-full text-center font-Michroma font-bold text-black text-xl md:text-2xl`}>WHAT PEOPLE SAY</motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`w-full flex justify-center items-center text-[12px] md:text-[14px] gap-2 mt-2 mb-5`}> <span className="text-yellow-500 text-[14px]"><SiGooglegemini /></span> Read out feedback from my network <span className="text-yellow-500 text-[14px]"><SiGooglegemini /></span></motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`w-full h-auto flex flex-col justify-center items-center relative overflow-hidden pb-5 pt-5`}>
            <div className="h-full z-20 absolute left-0 w-[20%] lg:w-[30%] bg-gradient-to-r from-white to-transparent"></div>

            <Marquee speed={70}>
              {testimonials.map((item, index) => {
                return <div key={index} className={`w-[70vw] md:w-[40vw] xl:w-[30vw] cursor-pointer mx-4 z-10 shadow-md flex flex-col justify-start items-start rounded-lg pb-3`}>
                  <div className={`w-full mb-1 shadow-lg inset-shadow-sm px-3 pt-2 pb-3 rounded-lg flex flex-col justify-start items-start`}>
                    <h2 className={`font-semibold text-xl text-black`}>{item.name}</h2>
                    <p className={`text-[12px] mt-2 lg:text-sm italic text-black opacity-65`}>{item.designation}</p>
                  </div>
                  <p className={`w-auto text-start text-[10px] lg:text-[12px] text-black px-3 py-4 font-light`}>{item.feedback}</p>
                </div>
              })}
            </Marquee>

            <p onClick={() => setTestimonialVisible(true)} className={`w-auto mt-5 text-center text-black text-[12px] cursor-pointer px-4 py-2 rounded-xl bg-gray-100 duration-300 ease-in-out flex justify-center items-center gap-2`}>View indivisual cards <IoIosArrowForward /></p>

            <div className="h-full z-20 absolute right-0 w-[20%] lg:w-[30%] bg-gradient-to-l from-white to-transparent"></div>
          </motion.div>
        </div>


        {/* testimonial popup */}
        <div onClick={() => setTestimonialVisible(false)} style={{
          background: "#000000",
          backgroundImage: `
              radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }} className={`w-full ${testimonialVisible ? "translate-y-0" : "translate-y-full"} duration-500 ease-in-out h-screen fixed inset-0 z-30 flex justify-center items-center`}>

          <p onClick={() => setTestimonialVisible(false)} className={`w-auto absolute bottom-12 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25 cursor-pointer`}>Close</p>

          <div onClick={(e) => e.stopPropagation()} className={`w-[90%] lg:w-[80%] rounded-xl overflow-y-auto max-h-[80vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 px-2 py-5 bg-transparent`}>

            {testimonials.map((item, index) => {
              return <div key={index} className={`w-full border border-blue-900 bg-linear-to-b from-zinc-950 to-[#010133] cursor-pointer shadow-lg flex flex-col justify-start items-start rounded-xl mb-4`}>
                <div className={`w-full mb-1 inset-shadow-sm px-3 pt-4 pb-3 rounded-lg flex flex-col justify-start items-start`}>
                  <img src={item.image} className={`h-10 rounded-full md:h-12`} />
                  <h2 className={`font-semibold text-xl text-white mt-3`}>{item.name}</h2>
                  <p className={`text-[12px] mt-1 italic text-white opacity-65`}>{item.designation}</p>
                </div>
                <p onClick={() => navigate(item.linkedin)} className={`w-auto rounded-full px-3 py-1 bg-blue-500 inset-shadow-sm inset-shadow-blue-800 text-white flex justify-center items-center gap-2 text-[12px] ml-3 cursor-pointer`}>LinkedIn <FaLinkedin /></p>
                <p className={`w-auto text-start text-[10px] text-white px-3 py-4 font-light`}>{item.feedback}</p>
              </div>
            })}
          </div>
        </div>

        <div className={`w-full bg-[#080808] h-12 flex justify-center items-center`}>
          <div className={`h-full w-full bg-white rounded-b-4xl`}></div>
        </div>


        <div className={`w-full bg-[#080808] py-10 md:pt-20 md:pb-10 flex justify-center items-center`}>
          <Link href='/cv_sudipto.pdf' download="/cv_sudipto.pdf" className={`w-auto inset-shadow-sm inset-shadow-blue-800 px-5 py-2 hover:scale-95 hover:rounded-4xl duration-200 ease-in-out cursor-pointer bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white font-Michroma text-sm md:text-lg font-light`}>Download CV</Link>
        </div>

        <div className={`w-full bg-[#080808] flex justify-center items-center px-5 py-5`}>
          <div className={`w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent`}></div>
        </div>

        {/* footer */}
        <div className={`w-full h-auto pt-10 pb-5 flex justify-center items-center gap-5 lg:gap-8 bg-[#080808]`}>
          <span onClick={() => navigate('mailto:work.sudiptodas@gmail.com')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><BiLogoGmail /></span>
          <span onClick={() => navigate('mailto:isudiptodas01@outlook.com')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><PiMicrosoftOutlookLogoFill /></span>
          <span onClick={() => navigate('https://github.com/isudiptodas')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaGithub /></span>
          <span onClick={() => navigate('https://www.linkedin.com/in/sudiptodas-developer')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaLinkedin /></span>
          <span onClick={() => navigate('https://www.x.com/isudiptodas')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaSquareXTwitter /></span>
        </div>
        <div className={`bg-[#080808] w-full h-auto flex justify-center items-center pb-4`}>
          <p className={`w-full text-center text-white text-[8px] md:text-[10px] opacity-70`}>Designed and developed by Sudipto</p>
        </div>

      </div>

    </>
  )
}

export default page






















