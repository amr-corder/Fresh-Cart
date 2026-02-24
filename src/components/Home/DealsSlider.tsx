"use client";

import { useEffect, useState } from "react";
import DealsSliderClient from "./DealsSliderClient";

export default function DealsSlider() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products?limit=40"
        );

        const json = await res.json();
        const products = json?.data || [];

        const filteredDeals = products
          .filter((p: any) => p.priceAfterDiscount)
          .slice(0, 12);

        setDeals(filteredDeals);
      } catch (error) {
        console.error("Deals Error:", error);
      }
    };

    getDeals();
  }, []);

  if (!deals.length) {
    return (
      <div className="text-center py-10 font-bold">
        Loading Deals...
      </div>
    );
  }

  return <DealsSliderClient products={deals} />;
}