'use client'

import { AnimatePresence, motion } from "framer-motion";
import { songs } from "@/data/songs";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaBackward, FaForward, FaListUl, FaPause, FaPlay, FaTimes } from "react-icons/fa";

type Playlist = (typeof songs)[number] & {
    type: "playlist";
    items: {
        name: string;
        link: string;
    }[];
};

type Single = (typeof songs)[number] & {
    type: "single";
    link: string;
};

type Song = {
    name: string;
    link: string;
    thumbnail: string;
};

function Page() {
    const playlists = songs.filter((song) => song.type === "playlist") as Playlist[];
    const singles = songs.filter((song) => song.type === "single") as Single[];
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
    const [queue, setQueue] = useState<Song[]>([]);
    const [queueIndex, setQueueIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

    const filteredPlaylists = useMemo(() => {
        return playlists.filter((playlist) =>
            playlist.name.toLocaleLowerCase().includes(normalizedQuery),
        );
    }, [normalizedQuery, playlists]);

    const filteredSingles = useMemo(() => {
        return singles.filter((single) =>
            single.name.toLocaleLowerCase().includes(normalizedQuery),
        );
    }, [normalizedQuery, singles]);

    useEffect(() => {
        if (!selectedPlaylist) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedPlaylist(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedPlaylist]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !currentTrack) return;

        setCurrentTime(0);
        setDuration(0);
        audio.load();
        audio.play().catch(() => setIsPlaying(false));
    }, [currentTrack]);

    const playTrack = (track: Song, tracks: Song[], index: number) => {
        setQueue(tracks);
        setQueueIndex(index);
        setCurrentTrack(track);
        setIsPlaying(true);
    };

    const togglePlayback = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play().catch(() => setIsPlaying(false));
        } else {
            audio.pause();
        }
    };

    const playQueueIndex = (index: number) => {
        if (queue.length === 0) return;

        const nextIndex = (index + queue.length) % queue.length;
        setQueueIndex(nextIndex);
        setCurrentTrack(queue[nextIndex]);
        setIsPlaying(true);
    };

    const playPrevious = () => {
        if (queue.length < 2) return;
        playQueueIndex(queueIndex - 1);
    };

    const playNext = () => {
        if (queue.length < 2) return;
        playQueueIndex(queueIndex + 1);
    };

    const formatTime = (time: number) => {
        if (!Number.isFinite(time)) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const seekTo = (time: number) => {
        const audio = audioRef.current;
        if (!audio || !Number.isFinite(duration)) return;

        audio.currentTime = time;
        setCurrentTime(time);
    };

    const closePlayer = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
        setIsPlayerExpanded(false);
        setCurrentTrack(null);
        setQueue([]);
        setQueueIndex(0);
        setCurrentTime(0);
        setDuration(0);
    };

    const renderProgress = (compact = false) => (
        <div
            className={`flex w-full items-center gap-2 font-Red-Hat-Display text-[9px] text-white/55 ${compact ? "md:gap-3" : "gap-3 md:gap-4"}`}
            onClick={(event) => event.stopPropagation()}
        >
            <span className="w-8 shrink-0 md:text-sm text-right tabular-nums">{formatTime(currentTime)}</span>
            <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={(event) => seekTo(Number(event.target.value))}
                className="h-2 min-w-0 flex-1 cursor-pointer rounded-full bg-white/25 accent-white"
                aria-label="Seek through song"
                disabled={!duration}
            />
            <span className="w-8 shrink-0 md:text-sm tabular-nums">{formatTime(duration)}</span>
        </div>
    );

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080808] pb-28 text-white">
            <p className="absolute left-1/2 top-7 -translate-x-1/2 select-none font-Red-Hat-Display text-[10px] tracking-[0.3rem] text-white md:text-sm">
                ISUDIPTODAS
            </p>

            <div className="mt-24 mb-10 flex w-full justify-center">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="w-[90%] rounded-full bg-zinc-800 px-4 py-3 font-Red-Hat-Display text-sm text-white outline-none md:w-[60%] lg:w-[40%]"
                    placeholder="Search songs"
                    aria-label="Search playlists and songs"
                />
            </div>

            <div className="mx-auto min-h-screen w-[95%] max-w-6xl pb-16 lg:px-3">
                {filteredPlaylists.length > 0 && (
                    <section className="mb-14">
                        <p className="mb-5 px-5 w-auto select-none font-Red-Hat-Display text-xs uppercase tracking-[0.2em] text-white/45">
                            Playlists
                        </p>
                        <div className="px-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {filteredPlaylists.map((playlist) => (
                                <motion.article
                                    key={playlist.id}
                                    initial={false}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setSelectedPlaylist(playlist)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            setSelectedPlaylist(playlist);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    className="group cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-900">
                                        <img
                                            src={playlist.thumbnail}
                                            alt={playlist.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute right-0 top-0 flex h-full w-[20%] items-center justify-center bg-black/60">
                                            <FaListUl className="text-sm text-white md:text-base" />
                                        </span>
                                    </div>
                                    <h2 className="mt-3 px-1 font-Red-Hat-Display text-sm font-semibold text-white md:text-base">
                                        {playlist.name}
                                    </h2>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setSelectedPlaylist(playlist);
                                        }}
                                        className="mt-2 px-1 text-left font-Red-Hat-Display text-[10px] text-white/55 transition-colors hover:text-white md:text-xs"
                                    >
                                        View Full Playlist
                                    </button>
                                </motion.article>
                            ))}
                        </div>
                    </section>
                )}

                {filteredSingles.length > 0 && (
                    <section className={`w-full`}>
                        <p className="mb-5 px-5 w-auto select-none font-Red-Hat-Display text-xs uppercase tracking-[0.2em] text-white/45">
                            Singles
                        </p>
                        <div className="px-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {filteredSingles.map((single) => {
                                const track: Song = {
                                    name: single.name,
                                    link: single.link,
                                    thumbnail: single.thumbnail,
                                };

                                return (
                                    <motion.article
                                        key={single.id}
                                        initial={false}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        className="group cursor-pointer"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => playTrack(track, [track], 0)}
                                            className="block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-white"
                                            aria-label={`Play ${single.name}`}
                                        >
                                            <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-900">
                                                <img
                                                    src={single.thumbnail}
                                                    alt={single.name}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <span className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg md:h-14 md:w-14">
                                                        <FaPlay className="ml-1 text-sm md:text-base" />
                                                    </span>
                                                </span>
                                            </div>
                                            <h2 className="mt-3 px-1 font-Red-Hat-Display text-sm font-semibold text-white md:text-base">
                                                {single.name}
                                            </h2>
                                        </button>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </section>
                )}

                {filteredPlaylists.length === 0 && filteredSingles.length === 0 && (
                    <p className="py-20 text-center font-Red-Hat-Display text-sm text-white/45">
                        No songs found
                    </p>
                )}
            </div>

            <AnimatePresence>
                {selectedPlaylist && (
                    <motion.div
                        key="playlist-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overscroll-contain bg-black/75 p-4 pt-10 backdrop-blur-sm lg:items-center lg:overflow-hidden lg:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedPlaylist.name}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) setSelectedPlaylist(null);
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="grid w-full max-w-5xl gap-5 rounded-[1.5rem] bg-[#171717] p-4 pb-32 md:gap-6 md:rounded-[2rem] md:p-8 lg:h-[75vh] lg:grid-cols-[0.78fr_1.22fr] lg:pb-24"
                        >
                            <div className="min-h-0">
                                <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] bg-neutral-900 md:rounded-[1.5rem]">
                                    <img
                                        src={selectedPlaylist.thumbnail}
                                        alt={selectedPlaylist.name}
                                        className="h-full w-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setSelectedPlaylist(null)}
                                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 lg:hidden"
                                        aria-label="Close playlist"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                                <h2 className="mt-4 text-center font-Red-Hat-Display text-xl font-bold md:text-2xl">
                                    {selectedPlaylist.name}
                                </h2>
                            </div>

                            <div className="flex min-h-0 flex-col rounded-[1.25rem] bg-[#202020] p-3 md:p-5 pb-10">
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="font-Red-Hat-Display text-xs uppercase tracking-[0.2em] text-white/45 mb-4 mt-3 pl-3">
                                        Song list
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedPlaylist(null)}
                                        className="hidden h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white lg:flex"
                                        aria-label="Close playlist"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="max-h-[42vh] space-y-2 overflow-y-auto overscroll-contain pr-1 [scrollbar-width:thin] lg:max-h-none lg:min-h-0 lg:flex-1">
                                    {selectedPlaylist.items.map((item, index) => {
                                        const track: Song = {
                                            name: item.name,
                                            link: item.link,
                                            thumbnail: selectedPlaylist.thumbnail,
                                        };
                                        const playlistTracks: Song[] = selectedPlaylist.items.map((playlistItem) => ({
                                            name: playlistItem.name,
                                            link: playlistItem.link,
                                            thumbnail: selectedPlaylist.thumbnail,
                                        }));

                                        return (
                                            <button
                                                key={`${item.name}-${index}`}
                                                type="button"
                                                onClick={() => playTrack(track, playlistTracks, index)}
                                                className="group flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-white/10"
                                            >
                                                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-neutral-900 md:h-16 md:w-16">
                                                    <img
                                                        src={selectedPlaylist.thumbnail}
                                                        alt=""
                                                        className="h-full w-full object-cover"
                                                    />
                                                    <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                                                        <FaPlay className="ml-0.5 text-xs" />
                                                    </span>
                                                </div>
                                                <p className="min-w-0 flex-1 font-Red-Hat-Display text-sm text-white/80 transition-colors group-hover:text-white">
                                                    {item.name}
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {currentTrack && !isPlayerExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-20 left-1/2 z-[70] w-[92%] max-w-xl -translate-x-1/2"
                    >
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={() => setIsPlayerExpanded(true)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    setIsPlayerExpanded(true);
                                }
                            }}
                            aria-label="Open full music player"
                            className="flex flex-col gap-2 rounded-full border border-white/10 bg-zinc-900/95 px-3 shadow-xl outline-none backdrop-blur-xl transition-colors hover:bg-zinc-800/95 focus-visible:ring-2 focus-visible:ring-white md:px-7 py-3"
                        >
                            <div className="flex h-12 items-center gap-3 md:h-14 md:gap-4">
                                <img
                                    src={currentTrack.thumbnail}
                                    alt=""
                                    className="h-10 w-10 shrink-0 rounded-full object-cover md:h-11 md:w-11"
                                />
                                <div className="min-w-0 flex-1">
                                    <p className="truncate font-Red-Hat-Display text-xs font-semibold text-white md:text-sm">
                                        {currentTrack.name}
                                    </p>
                                    <p className="mt-1 font-Red-Hat-Display text-[9px] uppercase tracking-[0.15em] text-white/40 md:text-[10px]">
                                        Now playing
                                    </p>
                                </div>
                                <div className="flex items-center gap-1 md:gap-2" onClick={(event) => event.stopPropagation()}>
                                    {queue.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={playPrevious}
                                            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                            aria-label="Previous song"
                                        >
                                            <FaBackward className="text-[10px]" />
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={togglePlayback}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform active:scale-95"
                                        aria-label={isPlaying ? "Pause" : "Play"}
                                    >
                                        {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="ml-0.5 text-xs" />}
                                    </button>
                                    {queue.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={playNext}
                                            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                            aria-label="Next song"
                                        >
                                            <FaForward className="text-[10px]" />
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={closePlayer}
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white"
                                        aria-label="Close music player"
                                    >
                                        <FaTimes className="text-xs" />
                                    </button>
                                </div>
                            </div>
                            {renderProgress(true)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {currentTrack && isPlayerExpanded && (
                    <motion.div
                        key="expanded-player"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-md md:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Now playing ${currentTrack.name}`}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) setIsPlayerExpanded(false);
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-y-auto bg-[#111] px-7 py-12 md:h-[78vh] md:w-2/3 md:max-w-2xl md:rounded-[2rem] md:border md:border-white/10 md:px-7"
                        >
                            <button
                                type="button"
                                onClick={() => setIsPlayerExpanded(false)}
                                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors hover:bg-white/20 hover:text-white"
                                aria-label="Close expanded player"
                            >
                                <FaTimes />
                            </button>

                            <div className="relative mb-10 h-56 w-72 shrink-0 md:mb-12 md:h-64 md:w-80">
                                <img
                                    src="/assets/music-cd.png"
                                    alt=""
                                    className={`absolute left-[38%] top-1/2 h-[78%] w-auto -translate-y-1/2 object-contain ${isPlaying ? "animate-spin [animation-duration:8s]" : ""}`}
                                />
                                <img
                                    src={currentTrack.thumbnail}
                                    alt={currentTrack.name}
                                    className="absolute left-0 top-1/2 z-10 h-52 w-52 -translate-y-1/2 rounded-2xl object-cover shadow-2xl md:h-60 md:w-60"
                                />
                            </div>

                            <div className="w-full max-w-md">
                                <p className="truncate text-center font-Red-Hat-Display text-xl font-bold text-white md:text-2xl">
                                    {currentTrack.name}
                                </p>
                                <p className="mt-2 text-center font-Red-Hat-Display text-xs uppercase tracking-[0.2em] text-white/40">
                                    Now playing
                                </p>
                            </div>

                            <div className="mt-8 w-full max-w-md md:mt-10">
                                {renderProgress()}
                            </div>

                            <div className="mt-7 flex items-center justify-center gap-8 md:mt-9 md:gap-10">
                                <button
                                    type="button"
                                    onClick={playPrevious}
                                    disabled={queue.length < 2}
                                    className="flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:text-white/25 disabled:hover:bg-transparent"
                                    aria-label="Previous song"
                                >
                                    <FaBackward className="text-lg" />
                                </button>
                                <button
                                    type="button"
                                    onClick={togglePlayback}
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform active:scale-95 md:h-[4.5rem] md:w-[4.5rem]"
                                    aria-label={isPlaying ? "Pause" : "Play"}
                                >
                                    {isPlaying ? <FaPause className="text-lg" /> : <FaPlay className="ml-1 text-lg" />}
                                </button>
                                <button
                                    type="button"
                                    onClick={playNext}
                                    disabled={queue.length < 2}
                                    className="flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:text-white/25 disabled:hover:bg-transparent"
                                    aria-label="Next song"
                                >
                                    <FaForward className="text-lg" />
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={closePlayer}
                                className="mt-10 rounded-full px-5 py-2 font-Red-Hat-Display text-xs text-white/45 transition-colors hover:text-white md:mt-12"
                            >
                                Close Player
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-7 left-0 z-[80] flex w-full justify-center px-5">
                <Link
                    href="/"
                    className="rounded-full bg-white/20 px-5 py-3 font-Red-Hat-Display text-xs text-white backdrop-blur-3xl transition-colors hover:bg-white/30 md:text-sm"
                >
                    Exit Section
                </Link>
            </div>

            <audio
                ref={audioRef}
                src={currentTrack?.link}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                onEnded={() => {
                    if (queue.length > 1) playQueueIndex(queueIndex + 1);
                }}
                hidden
            />
        </main>
    );
}

export default Page;
