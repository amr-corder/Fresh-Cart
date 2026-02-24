import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
           
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[620px] w-[980px] -translate-x-1/2 bg-linear-to-r from-blue-600/20 via-violet-600/20 to-purple-600/20 blur-3xl" />
                <div className="absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-56 -right-40 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            
            <div className="container mx-auto px-6 min-h-[calc(100vh-72px)] grid place-items-center py-10 relative">
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300 shadow-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                        Weekly deals • New arrivals • Fast delivery
                    </div>

                   
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Discover premium products with{" "}
                        <span className="bg-linear-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                            FreshCart
                        </span>
                    </h1>

                    
                    <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400">
                        Shop smarter with curated tech, fashion, and lifestyle picks. Secure checkout, fast shipping,
                        and trusted support — all in one place.
                    </p>

                   
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-violet-600 px-8 py-3 text-sm font-semibold
              shadow-lg transition hover:from-blue-500 hover:to-violet-500 hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] active:scale-[0.98]"
                        >
                            Shop Now
                        </Link>

                        <Link
                            href="/categories"
                            className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 px-8 py-3 text-sm font-semibold
              text-slate-200 transition hover:bg-slate-800/60 active:scale-[0.98]"
                        >
                            Browse Categories
                        </Link>
                    </div>

                   
                    <div className="flex flex-wrap justify-center gap-3 pt-4 text-sm text-slate-400">
                        <span className="rounded-full border border-slate-800 bg-slate-900/30 px-4 py-1.5">
                            🚚 Free Shipping
                        </span>
                        <span className="rounded-full border border-slate-800 bg-slate-900/30 px-4 py-1.5">
                            🔒 Secure Checkout
                        </span>
                        <span className="rounded-full border border-slate-800 bg-slate-900/30 px-4 py-1.5">
                            ⭐ 24/7 Support
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
