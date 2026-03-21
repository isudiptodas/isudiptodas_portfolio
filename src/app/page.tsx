'use client'

import { SiGooglegemini } from "react-icons/si";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { works } from "@/data/work";
import { techStackList } from "@/data/techStack";
import { useRouter } from "next/navigation";
import { testimonials } from "@/data/testimonials";
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import axios from "axios";
import { IoMdShareAlt } from "react-icons/io";

type ArticleListItem = {
  slug: string;
  title: string;
  category?: string;
  author: string;
  date: string;
  featured: boolean;
  tags: string[];
};

function page() {

  const [allArticles, setAllArticles] = useState<ArticleListItem[] | []>([]);
  const router = useRouter();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    //console.log(val);
  });

  const scale = useTransform(scrollY, [70, 600], [1, 0.4]);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const res = await axios.get(`/api/article`);
        setAllArticles(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAllArticles();
  }, []);

  const titles = [
    "FULL STACK WEB DEVELOPMENT",
    "DEVOPS",
    "AI/ML"
  ];

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
      <div className={`w-full h-auto flex flex-col justify-start items-center relative`}>

        {/* hero section */}
        <div className={`w-full z-10 h-screen fixed top-0 flex justify-center items-center`}>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, ease: "easeInOut"}} className={`w-full select-none absolute top-6 text-center text-white font-Red-Hat-Display tracking-[0.3rem] text-sm`}>ISUDIPTODAS</motion.p>

          {/* blue strips */}
          <div className={`w-full bg-black h-full grid grid-cols-7 items-end`}>
            <div className={`w-full h-full bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
            <div className={`w-full h-[70%] bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
            <div className={`w-full h-[60%] bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
            <div className={`w-full h-1/2 bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
            <div className={`w-full h-[60%] bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
            <div className={`w-full h-[70%] bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
            <div className={`w-full h-full bg-linear-to-t from-[#0012ff] via-[#001e8c] to-black`} />
          </div>

          <motion.p initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{duration: 1, ease: "easeInOut"}} style={{ scale }} className={`w-full select-none absolute top-[40%] text-center text-white font-Red-Hat-Display px-5 md:px-10 xl:px-20 text-sm md:text-lg lg:text-sm xl:text-lg`}>I’m a passionate full-stack developer with over 2 years of hands
            on experience on MERN stack, NextJS, SpringBoot specializing in building dynamic and responsive user interfaces.
            Currently focusing on devops and building high level systems that scale to millions.</motion.p>

          <div className={`w-full absolute top-[60%] flex justify-center items-center`}>
            <Marquee speed={70} >
              {titles.map((item, index) => {
                return <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{duration: 1.2, ease: "easeInOut"}} style={{ scale }} key={index} className={`text-white text-4xl xl:text-6xl font-Hatton-Medium flex`}>{item} <SiGooglegemini className="mx-5" /></motion.span>
              })}
            </Marquee>
          </div>

          <div className={`w-full absolute bottom-[20%] flex justify-center items-center`}>
            <motion.p initial={{y: 500, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, ease: "easeInOut"}} style={{ scale }} className={`w-auto select-none rounded-full bg-white text-black font-Red-Hat-Display font-semibold px-4 py-1`}>Blending tech & creativity</motion.p>
          </div>
        </div>

        {/* main section */}
        <div className={`w-full z-20 h-auto flex flex-col justify-start items-center`}>
          <div className={`w-full h-screen bg-transparent`} />

          {/* tech stack */}
          <div className={`w-full h-auto pb-10 flex flex-col justify-start items-center pt-6 md:pt-10 bg-white rounded-t-4xl`}>
            <motion.h1 initial={{filter: "blur(20px)"}} whileInView={{filter: "blur(0px)"}} transition={{delay: 0.3, duration: 0.4, ease: "easeInOut"}} viewport={{once: true}} className={`w-full text-center px-5 text-black font-Horizon text-2xl md:text-4xl xl:text-6xl`}>TECH STACK WORKED WITH</motion.h1>

            <div className={`w-full px-3 h-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4`}>
              {techStackList.map((item, index) => {
                return <motion.div initial={{filter: "blur(20px)"}} whileInView={{filter: "blur(0px)"}} transition={{delay: 0.3, duration: 0.4, ease: "easeInOut"}} viewport={{once: true}} key={index} className={`w-full rounded-xl bg-[#e4e4e4] flex flex-col justify-start items-center py-2 px-5`}>
                  <p className={`w-full text-center font-Red-Hat-Display font-bold text-lg border-b border-b-zinc-400 pb-4`}>{item.title}</p>
                  <p className={`w-full text-center font-Red-Hat-Display text-sm pt-5 pb-2`}>{item.items}</p>
                </motion.div>
              })}
            </div>
          </div>

          {/* selected works */}
          <div className={`w-full pb-10 bg-white h-auto flex flex-col justify-start items-center pt-10`}>
            <motion.h1 initial={{filter: "blur(20px)"}} whileInView={{filter: "blur(0px)"}} transition={{delay: 0.3, duration: 0.4, ease: "easeInOut"}} viewport={{once: true}} className={`w-full text-center px-5 text-black font-Horizon text-2xl md:text-4xl xl:text-6xl`}>SELECTED WORKS</motion.h1>

            <div className={`w-full px-3 h-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4`}>
              {works.map((item, index) => {
                return <motion.div initial={{filter: "blur(20px)"}} whileInView={{filter: "blur(0px)"}} transition={{delay: 0.3, duration: 0.4, ease: "easeInOut"}} viewport={{once: true}} key={index} className={`w-full rounded-xl bg-[#e4e4e4] flex flex-col justify-start items-center pb-3`}>
                  <div className={`w-full h-56 rounded-xl overflow-hidden bg-black`}> <img src={item.image} className={`w-full h-full object-cover`} /> </div>
                  <p className={`w-full select-none text-center font-Red-Hat-Display font-bold text-xl py-5`}>{item.title}</p>
                  <p onClick={() => router.push(item.link)} className={`w-[95%] bg-linear-to-r from-[#0012ff] to-[#001e8c] px-3 py-2 rounded-full select-none text-white font-Red-Hat-Display text-sm text-center cursor-pointer`}>Explore</p>
                </motion.div>
              })}
            </div>
          </div>

          {/* featured articles */}
          <div className={`w-full py-10 bg-black h-auto flex flex-col justify-start items-center pt-10`}>
            <h1 className={`w-full text-center px-5 text-white font-Horizon text-2xl md:text-4xl xl:text-6xl`}>FEATURED ARTICLES</h1>

            <div className={`w-full px-3 h-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4`}>
              {allArticles.length > 0 && allArticles.map((item, index) => {
                return <div key={index} className={`w-full ${item.featured ? "block" : "hidden"} rounded-xl bg-white px-4 pb-3 flex flex-col justify-between items-center`}>
                  <p className={`w-full pt-3 text-start font-Red-Hat-Display font-bold text-lg text-black`}>{item.title}</p>

                  <div className={`w-full mt-3 flex justify-between items-center py-2 gap-5`}>
                    <p className={`w-full rounded-full text-center select-none bg-black text-white text-sm px-4 py-3`}>Read now</p>
                    <p onClick={() => navigator.clipboard.writeText(`https://isudiptodas-portfolio.vercel.app/${item.slug}`)} className={`w-auto rounded-full bg-[#0012ff] text-white p-3`}><IoMdShareAlt /></p>
                  </div>
                </div>
              })}
            </div>

            <p onClick={() => router.push('/articles')} className={`w-auto bg-white text-black cursor-pointer text-[12px] select-none rounded-full mt-5 px-4 py-2`}>View all</p>

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

      </div>
    </>
  )
}

export default page

























