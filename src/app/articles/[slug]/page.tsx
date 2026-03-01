'use client'

import MarkdownRenderer from "@/components/MarkdownRenderer";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type ArticleListItem = {
    slug: string;
    title: string;
    author: string;
    date: string;
    featured: boolean;
    content: string;
    tags: string[];
};

type PageProps = {
    params: {
        slug: string;
    };
};

function page({ params }: PageProps) {

    const [article, setArticle] = useState<ArticleListItem | null>(null);

    useEffect(() => {
        const fetchAllArticles = async () => {
            try {
                const res = await axios.get(`/api/article/id?slug=${encodeURIComponent(params.slug)}`);
                setArticle(res.data);
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

                <div className={`w-full px-5 py-5 md:w-[70%] xl:w-[60%] h-auto flex flex-col justify-start items-center mt-16`}>
                    <h2 className={`w-full text-2xl text-start font-semibold text-white`}>{article?.title}</h2>
                    <p className={`w-full text-start font-light text-white text-[10px] lg:text-[12px] font-mono my-2`}>{article?.author} • {article?.date}</p>
                    <div className={`w-full flex flex-wrap justify-start items-start gap-3`}>
                        {article?.tags.map((tag, index) => {
                            return <span key={index} className={`w-auto px-2 py-1 border border-zinc-500 shrink-0 text-[8px] md:text-[12px] font-mono text-white`}>{tag}</span>
                        })}
                    </div>

                    <hr className={`w-full h-px bg-gray-400 mt-5`} />

                    <div className={`w-full pt-5 pb-10 text-start text-white text-sm`}>
                        <MarkdownRenderer content={article?.content as string} />
                    </div>
                </div>

            </div>
        </>
    )
}


export default page;
