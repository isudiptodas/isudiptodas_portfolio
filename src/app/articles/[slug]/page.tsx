
import MarkdownRenderer from "@/components/MarkdownRenderer";
import axios from "axios";
import Link from "next/link";
import { ArticleType as ArticleListItem } from '@/types/Article';

export default async function Page({ params } : any) {

    const { slug } = await params;
    const res = await axios.get(`https://isudiptodas-portfolio.vercel.app/api/article/id?slug=${encodeURIComponent(slug)}`);
    const article: ArticleListItem = res.data;

    return (
        <>
            <div className={`w-full bg-[#080808] relative min-h-screen flex flex-col justify-start items-center overflow-hidden`}>
          <p className={`w-full select-none absolute top-6 text-center text-white font-Red-Hat-Display tracking-[0.3rem] text-[10px] md:text-sm`}>ISUDIPTODAS</p>
                <div className={`w-full h-auto z-50 flex justify-center items-center px-5 fixed bottom-8`}>
                    <Link href='/articles' className={`w-auto px-5 py-3 rounded-full text-white font-Red-Hat-Display text-[10px] md:text-sm backdrop-blur-3xl bg-white/25`}>Articles Page</Link>
                </div>

                <div className={`w-full px-5 py-5 md:w-[70%] xl:w-[60%] h-auto flex flex-col justify-start items-center mt-16`}>
                    {/* <h2 className={`w-full text-2xl text-start font-semibold text-white`}>{article?.title}</h2> */}
                    <p className={`w-full text-start font-light text-white text-[10px] lg:text-[12px] font-mono my-2`}>{article?.author} • {article?.date}</p>
                    <div className={`w-full flex flex-wrap justify-start items-start gap-3`}>
                        {article?.tags.map((tag, index) => {
                            return <span key={index} className={`w-auto px-2 py-1 border border-zinc-500 shrink-0 text-[8px] md:text-[12px] font-mono text-white`}>{tag}</span>
                        })}
                    </div>

                    <hr className={`w-full h-0.5 bg-gray-400 mt-3`} />

                    <div className={`w-full pb-10 text-start text-white text-sm`}>
                        <MarkdownRenderer content={article?.content as string} />
                    </div>
                </div>

            </div>
        </>
    )
}





