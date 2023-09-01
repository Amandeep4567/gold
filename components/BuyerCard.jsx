import React from "react";

const BuyerCard = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-4"> Gold Enthusiast</div>
        <p class="text-gray-700 text-base">
          Gold Enthusiasts are passionate about gold. They trust us to provide
          them with high-quality gold items for their investments, collections,
          or personal adornment.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-center">
        <span class="inline-block bg-gray-300 rounded-full px-10 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2">
          Buyer
        </span>
      </div>
    </div>
  );
};

export default BuyerCard;
