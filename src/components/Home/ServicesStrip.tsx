import { Truck, ShieldCheck, RefreshCcw } from "lucide-react";

export default function ServicesStrip() {
    const items = [
        { t: "Fast delivery", d: "Quick shipping with reliable couriers.", Icon: Truck },
        { t: "Secure checkout", d: "Protected payments and trusted methods.", Icon: ShieldCheck },
        { t: "Easy returns", d: "Hassle-free returns on eligible items.", Icon: RefreshCcw },
    ];
    return (
        <section className="relative bg-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 left-1/2 h-65 w-205 -translate-x-1/2 bg-linear-to-r from-blue-200/60 via-violet-200/60 to-purple-200/60 blur-3xl" />
            </div>
            <div className="container mx-auto px-6 py-10 sm:py-12 relative">
                <div className="grid gap-4 md:grid-cols-3">
                    {items.map(({ t, d, Icon }) => (
                        <div
                            key={t}
                            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 
                            group-hover:opacity-100 bg-linear-to-b from-blue-500/10 via-violet-500/10 to-transparent" />
                            <div className="relative flex items-start gap-4">
                                <div className="grid size-12 place-items-center rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
                                    <Icon className="size-5 text-zinc-800" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-lg font-extrabold text-zinc-900">{t}</div>
                                    <div className="mt-1 text-sm text-zinc-600">{d}</div>
                                    <div className="mt-4 h-px w-full bg-zinc-200/80" />
                                    <div className="mt-3 text-xs text-zinc-500">Premium experience • Trusted service</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
