"use client";

import { useEffect, useState } from "react";
import CategoriesSliderClient from "./CategoriesSliderClient";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/categories?limit=20"
        );
        const json = await res.json();
        setCategories(json?.data || []);
      } catch (error) {
        console.error("Categories Error:", error);
      }
    };

    getCategories();
  }, []);

  if (!categories.length) {
    return (
      <div className="text-center py-10 font-bold">
        Loading Categories...
      </div>
    );
  }

  return <CategoriesSliderClient categories={categories} />;
}