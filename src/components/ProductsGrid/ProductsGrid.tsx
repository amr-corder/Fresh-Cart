import Image from "next/image";

export default function ProductsGrid({ products }: any) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((p: any) => (
                <div
                    key={p._id}
                    className="rounded-xl border bg-white shadow-sm overflow-hidden"
                >
                    <div className="relative aspect-square">
                        <Image
                            src={p.imageCover}
                            alt={p.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-3">
                        <p className="text-sm font-semibold line-clamp-1">
                            {p.title}
                        </p>
                        <p className="text-indigo-600 font-bold mt-1">
                            {p.price} EGP
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
