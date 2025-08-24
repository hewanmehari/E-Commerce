"use client";

import Header from "./shared-components/Header";
import Footer from "./shared-components/Footer";
import FlashSales from "./homePage/FlashSales";
import BestSelling from "./homePage/BestSellingProducts";
import FeaturedProducts from "./homePage/ExploreOurProduct";
import NewArrival from "./homePage/NewArrival";
import Services from "./homePage/Services";
import { ArrowUp } from "lucide-react";
import Exclusive from "./homePage/Exclusive";
import BrowseByCategory from "./homePage/BrowseByCategory";
import Categories from "./homePage/Categories";

export default function Index() {
  return (
    <div>
      <Header />
        <Exclusive />
        <FlashSales />
        <BrowseByCategory />
        <BestSelling />
        <Categories/>
        <FeaturedProducts />
        <NewArrival/>
        <Services />
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-exclusive-red hover:text-white transition-colors">
          <ArrowUp className="w-5 h-5" />
        </button>
      <Footer />
    </div>
  );
}