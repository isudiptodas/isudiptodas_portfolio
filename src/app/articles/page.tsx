'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { motion } from 'framer-motion';

type ArticleListItem = {
    slug: string;
    title: string;
    author: string;
    date: string;
    featured: boolean;
    tags: string[];
    category?: string;
};

function page() {

    const [allArticles, setAllArticles] = useState<ArticleListItem[] | []>([]);
    const [filteredArticles, setFilteredArticles] = useState<ArticleListItem[] | []>([]);
    const [option, setOption] = useState('latest');
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const colors = {
        SYSTEM_DESIGN: {
            border: "#099460",
            bg: "#bbffda"
        },
        AI_ML: {
            border: "#99008e",
            bg: "#dfbbff"
        },
        DEVOPS: {
            border: "#995700",
            bg: "#fff4bb"
        },
    }

    useEffect(() => {
        const fetchAllArticles = async () => {
            try {
                const res = await axios.get(`/api/article`);
                setAllArticles(res.data);
                setFilteredArticles(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchAllArticles();
    }, []);

    useEffect(() => {

        let sorted = [...filteredArticles]
        if (option === "latest") {
            sorted.sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
        } else {
            sorted.sort(
                (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
        }

        setAllArticles(sorted);
    }, [option])

    useEffect(() => {
        const filtered = allArticles.filter((item) => {
            return item.tags.some((tag) => {
                return tag.toLowerCase().includes(searchTerm.toLowerCase().trim())
            });
        });

        setFilteredArticles(filtered);
    }, [searchTerm]);

    return (
        <>
            <div className={`w-full bg-[#080808] relative min-h-screen flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`w-full select-none absolute top-6 text-center text-white font-Red-Hat-Display tracking-[0.3rem] text-sm`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Red-Hat-Display text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Section</Link>
                </div>

                <div className={`w-full px-5 lg:px-8 mt-20 flex justify-start lg:justify-center items-center gap-4`}>
                    <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className={`w-[75%] lg:w-[50%] py-3 md:py-2 px-3 bg-zinc-800 outline-none text-[10px] md:text-sm text-white rounded-full`} placeholder="Search for tags" />
                    <p onClick={() => setOption(option === 'latest' ? 'oldest' : 'latest')} className={`w-auto px-3 py-1 text-[12px] md:text-sm rounded-full text-gray-400 cursor-pointer select-none capitalize text-center flex justify-center items-center gap-2`}>{option} <FaSort /></p>
                </div>

                <div className={`w-full mt-5 px-5 lg:px-8 pt-8 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4`}>

                    {searchTerm && filteredArticles.map((item, index) => {
                        return <div onClick={() => router.push(`/articles/${item.slug}`)} key={index} className={`w-full active:bg-zinc-950 duration-150 ease-in-out rounded-xl cursor-pointer flex flex-col justify-start items-start py-5 px-3 bg-zinc-900`}>
                            <span className={`w-auto ${item.category === 'SYSTEM_DESIGN' ? "block" : "hidden"} px-3 py-1 rounded-full text-black text-[10px] border-2`} style={{
                                borderColor: colors.SYSTEM_DESIGN.border,
                                backgroundColor: colors.SYSTEM_DESIGN.bg
                            }}>System Design</span>
                            <span className={`w-auto ${item.category === 'DEVOPS' ? "block" : "hidden"} px-3 py-1 rounded-full text-black text-[10px] border-2`} style={{
                                borderColor: colors.DEVOPS.border,
                                backgroundColor: colors.DEVOPS.bg
                            }}>DevOps</span>
                            <span className={`w-auto ${item.category === 'AIML' ? "block" : "hidden"} px-3 py-1 rounded-full text-black text-[10px] border-2`} style={{
                                borderColor: colors.AI_ML.border,
                                backgroundColor: colors.AI_ML.bg
                            }}>AI/ML</span>
                            <h3 className={`w-full select-none text-start text-white font-bold text-lg my-3`}>{item.title}</h3>
                            <p className={`w-full select-none mb-2 text-start font-light text-white text-[10px] lg:text-[12px] font-mono my-2`}>{item.author} • {item.date}</p>
                            <div className={`w-full mt-2 mb-3 flex flex-wrap justify-start items-start gap-3`}>
                                {item.tags.map((tag, index) => {
                                    return <span key={index} className={`w-auto select-none px-2 py-1 border border-zinc-500 shrink-0 text-[8px] md:text-[12px] font-mono text-white`}>{tag}</span>
                                })}
                            </div>
                        </div>
                    })}

                    {!searchTerm && allArticles.map((item, index) => {
                        return <div onClick={() => router.push(`/articles/${item.slug}`)} key={index} className={`w-full active:bg-zinc-950 duration-150 ease-in-out rounded-xl cursor-pointer flex flex-col justify-start items-start py-5 px-3 bg-zinc-900`}>
                            <span className={`w-auto ${item.category === 'SYSTEM_DESIGN' ? "block" : "hidden"} px-3 py-1 rounded-full text-black text-[10px] border-2`} style={{
                                borderColor: colors.SYSTEM_DESIGN.border,
                                backgroundColor: colors.SYSTEM_DESIGN.bg
                            }}>System Design</span>
                            <span className={`w-auto ${item.category === 'DEVOPS' ? "block" : "hidden"} px-3 py-1 rounded-full text-black text-[10px] border-2`} style={{
                                borderColor: colors.DEVOPS.border,
                                backgroundColor: colors.DEVOPS.bg
                            }}>DevOps</span>
                            <span className={`w-auto ${item.category === 'AIML' ? "block" : "hidden"} px-3 py-1 rounded-full text-black text-[10px] border-2`} style={{
                                borderColor: colors.AI_ML.border,
                                backgroundColor: colors.AI_ML.bg
                            }}>AI/ML</span>
                            <h3 className={`w-full select-none text-start text-white font-bold text-lg my-3`}>{item.title}</h3>
                            <p className={`w-full select-none mb-2 text-start font-light text-white text-[10px] lg:text-[12px] font-mono my-2`}>{item.author} • {item.date}</p>
                            <div className={`w-full mt-2 mb-3 flex flex-wrap justify-start items-start gap-3`}>
                                {item.tags.map((tag, index) => {
                                    return <span key={index} className={`w-auto select-none px-2 py-1 border border-zinc-500 shrink-0 text-[8px] md:text-[12px] font-mono text-white`}>{tag}</span>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}


export default page;









