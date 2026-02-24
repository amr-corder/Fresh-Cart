import Link from "next/link";
import Image from "next/image";

type Category = {
    _id: string;
    name: string;
    image?: string;
    slug?: string;
};

export default async function CategoriesGrid() {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories?limit=12", {
        cache: "no-store",
    });
    const json = await res.json();
    const categories: Category[] = json?.data ?? [];

    if (!categories.length) return null;

    return (
        <section className="bg-slate-950 text-white">
            <div className="container mx-auto px-6 pb-14">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <div className="text-xs text-slate-400">Browse faster</div>
                        <h3 className="mt-1 text-xl sm:text-2xl font-extrabold">
                            Shop by{" "}
                            <span className="bg-linear-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                                category
                            </span>
                        </h3>
                    </div>

                    <Link href="/categories" className="text-sm font-semibold text-slate-200 hover:text-white transition">
                        All categories →
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map((c) => (
                        <Link key={c._id} href={`/categories/${c._id}`} className="block group">
                            <div
                                className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6
                shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-linear-to-b from-blue-500/10 via-violet-500/10 to-transparent" />

                                {/* image */}
                                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40">
                                    {c.image ? (
                                        <Image
                                            src={c.image}
                                            alt={c.name}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.06]"
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-slate-900/40" />
                                    )}
                                </div>

                                {/* title */}
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <span className="text-sm font-extrabold text-white line-clamp-1">{c.name}</span>
                                    <span className="text-xs font-semibold text-slate-300 group-hover:text-violet-300 transition">
                                        View →
                                    </span>
                                </div>

                                <div className="mt-1 text-[11px] text-slate-400">
                                    Browse products & offers
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
