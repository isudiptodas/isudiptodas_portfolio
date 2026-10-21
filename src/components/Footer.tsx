'use client'

import { IoLogoInstagram } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Footer() {

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
            <div className={`w-full h-auto pt-10 pb-5 flex justify-center items-center gap-5 lg:gap-8 bg-[#080808]`}>
                <span onClick={() => navigate('mailto:work.sudiptodas@gmail.com')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><BiLogoGmail /></span>
                <span onClick={() => navigate('mailto:isudiptodas01@outlook.com')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><PiMicrosoftOutlookLogoFill /></span>
                <span onClick={() => navigate('https://github.com/isudiptodas')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaGithub /></span>
                <span onClick={() => navigate('https://www.linkedin.com/in/sudiptodas-developer')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaLinkedin /></span>
                <span onClick={() => navigate('https://www.x.com/isudiptodas')} className={`text-xl md:text-2xl lg:text-3xl text-white cursor-pointer`}><FaSquareXTwitter /></span>
                <span onClick={() => navigate('https://www.instagram.com/isudiptodas/')} className={`text-xl md:text-2xl lg:text-4xl text-white cursor-pointer`}><IoLogoInstagram /></span>
            </div>
        </>
    )
}

export default Footer
