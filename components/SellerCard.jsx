import React from "react";

const SellerCard = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-4">Gold Provider</div>
        <p class="text-gray-700 text-base">
          As Gold Providers, we ensure the smooth and secure transfer of gold
          from creators to enthusiasts. We uphold the highest standards of
          integrity and reliability in the process.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-center">
        <span class="inline-block bg-gray-300 rounded-full px-10 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2">
          Seller
        </span>
      </div>
    </div>
  );
};

export default SellerCard;
