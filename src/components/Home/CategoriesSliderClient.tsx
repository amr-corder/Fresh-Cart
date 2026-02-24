"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
type Category = {
    _id: string;
    name: string;
    image?: string;
    slug?: string;
};
export default function CategoriesSliderClient({ categories }: { categories: Category[] }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const scrollByCards = (dir: "left" | "right") => {
        const el = ref.current;
        if (!el) return;
        const amount = Math.round(el.clientWidth * 0.85);
        el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };
    if (!categories?.length) return null;
    return (
        <section className="relative bg-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 left-1/2 h-65 w-205 -translate-x-1/2 bg-linear-to-r from-blue-200/60 via-violet-200/60 to-purple-200/60 blur-3xl" />
            </div>
            <div className="container mx-auto px-6 pb-12 relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                            ✨ Explore collections
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
                            Shop by{" "}
                            <span className="bg-linear-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                                Category
                            </span>
                        </h3>
                        <p className="text-sm text-zinc-600 max-w-xl">
                            Pick a category to discover curated products and offers.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={() => scrollByCards("left")}
                                className="grid size-10 place-items-center rounded-2xl border border-zinc-200 bg-white shadow-sm
                                hover:bg-zinc-50 transition active:scale-[0.98]"
                                aria-label="Previous">
                                <ChevronLeft className="size-5 text-zinc-800" />
                            </button>
                            <button
                                onClick={() => scrollByCards("right")}
                                className="grid size-10 place-items-center rounded-2xl border border-zinc-200 bg-white 
                                shadow-sm hover:bg-zinc-50 transition active:scale-[0.98]"
                                aria-label="Next">
                                <ChevronRight className="size-5 text-zinc-800" />
                            </button>
                        </div>
                        <Link
                            href="/categories"
                            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 
                            bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 transition active:scale-[0.98]">
                            All categories →
                        </Link>
                    </div>
                </div>
                <div className="mt-6 rounded-3xl border border-zinc-200 bg-linear-to-b from-zinc-50 to-white p-3 sm:p-4 shadow-sm">
                    <div
                        ref={ref}
                        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory
                        pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {categories.map((c) => (
                            <Link
                                key={c._id}
                                href={`/categories/${c._id}`}
                                className="snap-start shrink-0 w-[62%] sm:w-[34%] md:w-[26%] lg:w-[20%]">
                                <div
                                    className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm
                                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 
                                    group-hover:opacity-100 bg-linear-to-b from-blue-500/10 via-violet-500/10 to-transparent" />
                                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                                        {c.image ? (
                                            <Image
                                                src={c.image}
                                                alt={c.name}
                                                fill
                                                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 33vw, 20vw"
                                                className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.06]"/>
                                        ) : (
                                            <div className="h-full w-full bg-zinc-100" />
                                        )}
                                    </div>
                                    <div className="relative mt-4 flex items-center justify-between gap-3">
                                        <span className="text-sm font-extrabold text-zinc-900 line-clamp-1">{c.name}</span>
                                        <span className="text-xs font-semibold text-zinc-500 group-hover:text-violet-700 transition">
                                            View →
                                        </span>
                                    </div>
                                    <div className="relative mt-1 text-[11px] text-zinc-500">Browse products & offers</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
