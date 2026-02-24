import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative border-t border-slate-800 bg-slate-950 text-slate-300">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent" />
            <div className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold bg-linear-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                            FreshCart
                        </h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Your trusted online store for tech, fashion, and lifestyle products.
                            Fast shipping and premium quality guaranteed.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="p-2 rounded-xl bg-slate-900 border border-slate-800
                                    hover:bg-slate-800 transition cursor-pointer">
                                    <Icon size={16} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products" className="hover:text-white transition">All Products</Link></li>
                            <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
                            <li><Link href="/brands" className="hover:text-white transition">Brands</Link></li>
                            <li><Link href="/deals" className="hover:text-white transition">Deals</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                            <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} NovaMart. All rights reserved.</p>
                    <div className="flex gap-5">
                        <span>🚚 Fast Shipping</span>
                        <span>🔒 Secure Payments</span>
                        <span>⭐ 24/7 Support</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
