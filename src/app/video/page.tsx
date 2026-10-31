'use client'

import { AnimatePresence, motion } from "framer-motion";
import { videoLinks } from "@/data/video";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaPlay, FaTimes } from "react-icons/fa";

type Video = (typeof videoLinks)[number];

function OrientationIcon({ orientation }: { orientation: Video["orientation"] }) {
    return (
        <span
            aria-hidden="true"
            className={`inline-block shrink-0 rounded-[2px] border border-current ${orientation === "16:9" ? "h-3 w-5" : "h-5 w-3"
                }`}
        />
    );
}

function Page() {
    const orientations = ["16:9", "9:16"] as const;
    const categories = useMemo(
        () => [...new Set(videoLinks.map((video) => video.category))]
            .sort((first, second) => {
                if (first === "Cinematic Storytelling") return -1;
                if (second === "Cinematic Storytelling") return 1;
                return first.localeCompare(second);
            }),
        [],
    );
    const carouselRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [activeIndexes, setActiveIndexes] = useState<Record<string, number>>({});
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [videoIsPlaying, setVideoIsPlaying] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedOrientation, setSelectedOrientation] = useState<string>("16:9");
    const [orientationMenuIsOpen, setOrientationMenuIsOpen] = useState(false);

    const filteredVideos = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

        return videoLinks.filter((video) => {
            const matchesTitle = video.title.toLocaleLowerCase().includes(normalizedQuery);
            const matchesOrientation = video.orientation === selectedOrientation;

            return matchesTitle && matchesOrientation;
        });
    }, [searchQuery, selectedOrientation]);

    useEffect(() => {
        const visibleCategories = categories.filter((category) =>
            filteredVideos.some((video) => video.category === category),
        );

        visibleCategories.forEach((category) => {
            const carousel = carouselRefs.current[category];
            const categoryVideos = filteredVideos.filter((video) => video.category === category);
            if (!carousel) return;

            const initialIndex = Math.floor(categoryVideos.length / 2);
            const initialCard = carousel.querySelector<HTMLElement>(`[data-video-index="${initialIndex}"]`);
            if (initialCard) {
                carousel.scrollLeft = initialCard.offsetLeft
                    - (carousel.clientWidth - initialCard.offsetWidth) / 2;
            }
            setActiveIndexes((current) => ({ ...current, [category]: initialIndex }));
        });
    }, [categories, filteredVideos]);

    useEffect(() => {
        if (!selectedVideo) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedVideo(null);
                setVideoIsPlaying(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedVideo]);

    const scrollToVideo = (category: string, index: number) => {
        const carousel = carouselRefs.current[category];
        const card = carousel?.querySelector<HTMLElement>(`[data-video-index="${index}"]`);
        if (!carousel || !card) return;

        carousel.scrollTo({
            left: card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2,
            behavior: "smooth",
        });
    };

    const updateActiveIndex = (category: string) => {
        const carousel = carouselRefs.current[category];
        if (!carousel) return;

        const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
        const cards = Array.from(carousel.querySelectorAll<HTMLElement>("[data-video-index]"));
        if (cards.length === 0) return;
        const closestCard = cards.reduce((closest, card) => {
            const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
            const closestCenter = closest.getBoundingClientRect().left + closest.clientWidth / 2;
            return Math.abs(cardCenter - carouselCenter) < Math.abs(closestCenter - carouselCenter)
                ? card
                : closest;
        });

        setActiveIndexes((current) => ({
            ...current,
            [category]: Number(closestCard.dataset.videoIndex),
        }));
    };

    const openVideo = (video: Video) => {
        setVideoIsPlaying(false);
        setSelectedVideo(video);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
        setVideoIsPlaying(false);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b] pb-28 text-white">
            <p className="absolute left-1/2 top-7 -translate-x-1/2 select-none font-Red-Hat-Display text-[10px] tracking-[0.3rem] text-white md:text-sm">
                ISUDIPTODAS
            </p>

            <div className={`w-full mb-10 mt-24 flex justify-center items-center`}>
                <div className="relative z-50 w-[90%] flex flex-col items-center justify-center gap-3 md:w-[80%] md:flex-row lg:w-[60%]">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="w-full rounded-full bg-zinc-800 px-4 py-3 outline-none md:min-w-0 md:flex-1"
                        placeholder="Search video"
                        aria-label="Search videos by title"
                    />
                    <div className="relative w-full md:w-56 md:shrink-0">
                        <button
                            type="button"
                            onClick={() => setOrientationMenuIsOpen((isOpen) => !isOpen)}
                            className="flex w-full items-center justify-between rounded-full border border-white/10 bg-zinc-900 px-4 py-3 text-left font-Red-Hat-Display text-sm text-white/75 transition-colors hover:bg-zinc-800"
                            aria-haspopup="listbox"
                            aria-expanded={orientationMenuIsOpen}
                            aria-label="Filter videos by orientation"
                        >
                            <span className="flex items-center gap-2">
                                <OrientationIcon orientation={selectedOrientation} />
                                {selectedOrientation}
                            </span>
                            <motion.span
                                animate={{ rotate: orientationMenuIsOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaChevronDown className="text-xs" />
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {orientationMenuIsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                    transition={{ duration: 0.18 }}
                                    className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-1 shadow-xl"
                                    role="listbox"
                                    aria-label="Video orientations"
                                    onKeyDown={(event) => {
                                        if (event.key === "Escape") setOrientationMenuIsOpen(false);
                                    }}
                                >
                                    {orientations.map((orientation) => (
                                        <button
                                            key={orientation}
                                            type="button"
                                            role="option"
                                            aria-selected={selectedOrientation === orientation}
                                            onClick={() => {
                                                setSelectedOrientation(orientation);
                                                setOrientationMenuIsOpen(false);
                                            }}
                                            className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left font-Red-Hat-Display text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                                        >
                                            <OrientationIcon orientation={orientation} />
                                            {orientation}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex min-h-screen w-[95%] max-w-6xl flex-col items-center">
                <div className="w-full space-y-12 py-5 md:space-y-16">
                    {categories.map((category) => {
                        const categoryVideos = filteredVideos.filter((video) => video.category === category);
                        if (categoryVideos.length === 0) return null;

                        const activeIndex = Math.min(
                            activeIndexes[category] ?? Math.floor(categoryVideos.length / 2),
                            categoryVideos.length - 1,
                        );

                        return (
                            <section key={category} className={`w-full overflow-x-hidden flex flex-col justify-start items-center relative`}>
                                <div className={`w-[10%] z-40 hidden md:block h-full absolute left-0 bottom-0 bg-gradient-to-r from-[#0b0b0b] to-transparent`} />
                                <div className={`w-[10%] z-40 hidden md:block h-full absolute right-0 bottom-0 bg-gradient-to-l from-[#0b0b0b] to-transparent`} />

                                <p className={`w-auto select-none px-4 py-2 rounded-full border border-white/10 bg-zinc-900 text-white/60 font-Red-Hat-Display text-[8px] md:text-[12px] tracking-[0.2rem] text-center uppercase`}>{category}</p>

                                <div className="mx-auto mb-7 h-px w-[78%] bg-gradient-to-r from-transparent via-white/35 to-transparent md:mb-9" />

                                <div
                                    ref={(element) => { carouselRefs.current[category] = element; }}
                                    onScroll={() => updateActiveIndex(category)}
                                    className="relative flex w-screen snap-x snap-mandatory items-center gap-3 overflow-x-auto overscroll-x-contain px-[12.5vw] py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 md:px-[25vw] lg:px-[30vw]"
                                >
                                    {categoryVideos.map((video, index) => (
                                        <motion.article
                                            key={video.id}
                                            data-video-index={index}
                                            initial={false}
                                            animate={{
                                                scale: activeIndex === index ? 1 : 0.88,
                                                opacity: activeIndex === index ? 1 : 0.62,
                                            }}
                                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                                            whileHover={{ scale: activeIndex === index ? 1.035 : 0.91 }}
                                            className={`group relative shrink-0 snap-center cursor-pointer overflow-hidden rounded-xl bg-neutral-900 ${
                                                selectedOrientation === "9:16"
                                                    ? "w-[45vw] md:w-[28vw] lg:w-[22vw]"
                                                    : "w-[75vw] md:w-[50vw] lg:w-[40vw]"
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => openVideo(video)}
                                                className={`relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                                                    selectedOrientation === "9:16" ? "aspect-[9/16]" : "aspect-video"
                                                }`}
                                                aria-label={`Play ${video.title}`}
                                            >
                                                <img
                                                    src={video.thumbnail}
                                                    alt=""
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
                                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14">
                                                        <FaPlay className="ml-1 text-sm md:text-base" />
                                                    </span>
                                                </span>
                                            </button>
                                        </motion.article>
                                    ))}
                                </div>

                                <div className="mt-5 flex items-center justify-center gap-5">
                                    <motion.button
                                        type="button"
                                        whileTap={{ scale: 0.9 }}
                                        disabled={activeIndex === 0}
                                        onClick={() => scrollToVideo(category, activeIndex - 1)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                                        aria-label={`Previous ${category} video`}
                                    >
                                        <FaArrowLeft />
                                    </motion.button>
                                    <span className="min-w-12 text-center font-Red-Hat-Display text-xs tracking-widest text-white/55">
                                        {String(activeIndex + 1).padStart(2, "0")} / {String(categoryVideos.length).padStart(2, "0")}
                                    </span>
                                    <motion.button
                                        type="button"
                                        whileTap={{ scale: 0.9 }}
                                        disabled={activeIndex === categoryVideos.length - 1}
                                        onClick={() => scrollToVideo(category, activeIndex + 1)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                                        aria-label={`Next ${category} video`}
                                    >
                                        <FaArrowRight />
                                    </motion.button>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            <div className="fixed bottom-7 left-0 z-30 flex w-full justify-center px-5">
                <Link
                    href="/"
                    className="rounded-full bg-white/20 px-5 py-3 font-Red-Hat-Display text-xs text-white backdrop-blur-3xl transition-colors hover:bg-white/30 md:text-sm"
                >
                    Exit Section
                </Link>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        key="video-detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overscroll-contain bg-black/95 p-4 pt-10 backdrop-blur-sm lg:items-center lg:overflow-hidden lg:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedVideo.title}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) closeVideo();
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="grid w-full max-w-6xl grid-rows-[auto_auto] gap-6 overflow-visible md:gap-8 lg:h-full lg:max-h-full lg:min-h-0 lg:grid-cols-2 lg:grid-rows-1 lg:overflow-hidden lg:items-stretch"
                        >
                            <div className="flex min-h-0 min-w-0 flex-col justify-start">
                                <div className={`group relative mx-auto overflow-hidden rounded-[1.5rem] bg-neutral-900 md:rounded-[2rem] ${selectedVideo.orientation === "9:16"
                                        ? "aspect-[9/16] h-[55vh] w-auto max-w-full md:h-[65vh]"
                                        : "aspect-video w-full"
                                    }`}>
                                    {videoIsPlaying ? (
                                        <video
                                            src={selectedVideo.link}
                                            className="h-full w-full object-contain"
                                            autoPlay
                                            controls
                                            playsInline
                                        />
                                    ) : (
                                        <>
                                            <img
                                                src={selectedVideo.thumbnail}
                                                alt={selectedVideo.title}
                                                className="h-full w-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setVideoIsPlaying(true)}
                                                className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/25 focus-visible:outline-2 focus-visible:outline-white"
                                                aria-label={`Play ${selectedVideo.title}`}
                                            >
                                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform duration-300 hover:scale-110 md:h-20 md:w-20">
                                                    <FaPlay className="ml-1 text-xl md:text-2xl" />
                                                </span>
                                            </button>
                                        </>
                                    )}
                                </div>
                                <h2 className="my-5 px-5 text-center font-Red-Hat-Display text-2xl font-bold leading-tight md:text-3xl">
                                    {selectedVideo.title}
                                </h2>
                                <p className="-mt-3 mb-5 px-5 text-center font-Red-Hat-Display text-sm text-white/55">
                                    Uploaded on: {selectedVideo.date}
                                </p>
                            </div>

                            <div className="flex min-h-0 flex-col rounded-[1.5rem] bg-[#171717] px-5 pb-6 pt-5 md:rounded-[2rem] md:p-8 lg:p-10">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="font-Red-Hat-Display text-xs uppercase tracking-[0.2em] text-white/45">
                                        {selectedVideo.category}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={closeVideo}
                                        className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
                                        aria-label="Close video details"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="max-h-[40vh] overflow-y-auto overscroll-contain pr-2 font-Red-Hat-Display text-sm leading-6 text-white/75 md:text-[15px] md:leading-7 lg:max-h-none lg:min-h-0 lg:flex-1">
                                    <p className="whitespace-pre-line">{selectedVideo.description}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={closeVideo}
                                    className="mt-5 flex min-h-12 w-full items-center justify-center rounded-full bg-[#343434] font-Red-Hat-Display text-sm font-semibold text-white transition-colors hover:bg-[#454545] md:mt-8"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Page;
