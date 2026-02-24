import React from "react";
import CategoriesGrid, { Category } from "@/components/CategoriesGrid/CategoriesGrid";

type CategoriesResponse = {
  data: Category[];
};

export default async function CategoriesPage() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    cache: "no-store",
  });
  const json: CategoriesResponse = await res.json();
  const categories = json?.data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative text-center space-y-3">
          <div className="mx-auto w-fit rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-zinc-700">
            ✨ Categories • Updated regularly
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
            Explore{" "}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h1>

          <p className="text-sm text-zinc-600">Click a category to view products.</p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-blue-600 to-violet-600" />
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        {categories.length ? 
          <CategoriesGrid categories={categories} />
        : (
          <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8 text-center">
            <p className="text-zinc-700 font-semibold">No categories found</p>
            <p className="text-sm text-zinc-500 mt-2">The API returned an empty list.</p>
          </div>
        )}
      </div>
    </div>
  );
}
