import React from "react";

const MakerCard = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-4">Gold Creator</div>
        <p class="text-gray-700 text-base">
          Our Gold Creators are the talented artisans behind each exquisite gold
          item. They transform raw gold into works of art, crafting pieces of
          beauty and value.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-center">
        <span class="inline-block bg-gray-300 rounded-full px-10 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2">
          Maker
        </span>
      </div>
    </div>
  );
};

export default MakerCard;
