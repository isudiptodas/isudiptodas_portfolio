'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ArticleListItem = {
    slug: string;
    title: string;
    author: string;
    date: string;
    featured: boolean;
    tags: string[];
};

function page() {

    const [allArticles, setAllArticles] = useState<ArticleListItem[] | []>([]);
    const router = useRouter();

    const openLink = (link: string) => {
        window.open(link, '_blank');
    }

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


    return (
        <>
            <div className={`w-full bg-[#080808] relative min-h-screen flex flex-col justify-start items-center overflow-hidden`}>
                <p className={`absolute left-1/2 -translate-x-1/2 top-7 font-Michroma text-[10px] text-white tracking-[5px]`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/' className={`w-auto px-5 py-3 rounded-full text-white font-Michroma text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Exit Section</Link>
                </div>

                <div className={`w-full mt-16 px-5 lg:px-8 pt-8 pb-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4`}>
                    {allArticles.map((item, index) => {
                        return <div onClick={() => router.push(`/articles/${item.slug}`)} key={index} className={`w-full cursor-pointer hover:rounded-4xl duration-200 ease-in-out ${item.featured ? "block" : "hidden"} flex flex-col justify-start items-center py-5 px-3 bg-linear-to-br from-zinc-800 to-zinc-900`}>
                            <h3 className={`w-full text-start text-white font-semibold text-sm`}>{item.title}</h3>
                            <p className={`w-full mb-2 text-start font-light text-white text-[10px] lg:text-[12px] font-mono my-2`}>{item.author} • {item.date}</p>
                            <div className={`w-full flex flex-wrap justify-start items-start gap-3`}>
                                {item.tags.map((tag, index) => {
                                    return <span key={index} className={`w-auto px-2 py-1 border border-zinc-500 shrink-0 text-[8px] md:text-[12px] font-mono text-white`}>{tag}</span>
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
