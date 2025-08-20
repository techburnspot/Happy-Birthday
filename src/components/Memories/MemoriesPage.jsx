import React from "react";
import HeaderSection from "./HeaderSection";
import MemoriesGrid from "./MemoriesGrid";
import FeaturedCarousel from "./FeaturedCarousel";
import ClosingMessage from "./ClosingMessage";

export default function MemoriesPage() {
  return (
    <div>
      <HeaderSection />
      <MemoriesGrid />
      <FeaturedCarousel />
      <ClosingMessage />
    </div>
  );
}
