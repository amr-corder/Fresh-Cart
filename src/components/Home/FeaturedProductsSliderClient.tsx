"use client";

import React, { useRef } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedProductsSliderClient({ products }: { products: any[] }) {
    const ref = useRef<HTMLDivElement | null>(null);

    const scrollByCards = (dir: "left" | "right") => {
        const el = ref.current;
        if (!el) return;
        const amount = Math.round(el.clientWidth * 0.9);
        el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };

    return (
        <section className="bg-slate-950 text-white">
            <div className="container mx-auto px-6 py-10 sm:py-12">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <div className="text-xs text-slate-400">Hand-picked for you</div>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold">
                            Featured{" "}
                            <span className="bg-linear-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                                Products
                            </span>
                        </h2>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                        <button
                            onClick={() => scrollByCards("left")}
                            className="grid size-10 place-items-center rounded-2xl border border-slate-800 bg-slate-900/60
              hover:bg-slate-800/70 transition active:scale-[0.98]"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="size-5 text-slate-200" />
                        </button>
                        <button
                            onClick={() => scrollByCards("right")}
                            className="grid size-10 place-items-center rounded-2xl border border-slate-800 bg-slate-900/60
              hover:bg-slate-800/70 transition active:scale-[0.98]"
                            aria-label="Next"
                        >
                            <ChevronRight className="size-5 text-slate-200" />
                        </button>
                    </div>
                </div>

                <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900/30 p-3 sm:p-4">
                    <div
                        ref={ref}
                        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory
            pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {products.map((p) => (
                            <div
                                key={p._id}
                                className="snap-start shrink-0 w-[78%] xs:w-[58%] sm:w-[42%] md:w-[32%] lg:w-[24%]"
                            >
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-slate-400">Swipe on mobile • Use arrows on desktop</div>
                        <Link
                            href="/products"
                            className="text-sm font-semibold text-slate-200 hover:text-white transition"
                        >
                            View all →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
