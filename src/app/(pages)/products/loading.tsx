import Image from "next/image";
import logo1 from "../../logo1.jpg"

export default function Loading() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-zinc-50 px-4">
            <div className="relative text-center">
                <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="relative flex items-center justify-center mb-6 gap-3">
                    <Image
                        src={logo1}
                        alt="logo1"
                        width={40}
                        height={40}
                        className="object-contain"/>
                    <span className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                         FreshCart
                    </span>
                </div>
                <div className="relative w-14 h-14 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-slate-900 animate-spin" />
                </div>
                <p className="mt-4 text-sm text-zinc-600">
                    Loading your experience...
                </p>
            </div>
        </div>
    );
}
