import React from "react";
import BuyerCard from "./BuyerCard";
import MakerCard from "./MakerCard";
import SellerCard from "./SellerCard";

const BuulionTrails = () => {
  return (
    <div className="p-10">
      <div className="flex justify-around">
        <BuyerCard />
        <MakerCard />
        <SellerCard />
      </div>
    </div>
  );
};

export default BuulionTrails;
