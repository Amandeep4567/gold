import React from "react";
import "../app/globals.css";

const Maker = () => {
  return (
    <section className="w-full p-4 bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <div className="bg-gray-300 rounded-full px-6 py-2 text-sm font-semibold text-gray-800 inline-block">
            <button className="text-gray-700 hover:underline float-right">
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-semibold">Create Gold</h1>
          <div className="mb-2">
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none"
              placeholder="Input Field 1"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none"
              placeholder="Input Field 2"
            />
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg">
              Create Gold
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-semibold">Sell to Seller</h1>
          <div className="mb-2">
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none"
              placeholder="Input Field 1"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none"
              placeholder="Input Field 2"
            />
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg">
              Sell
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-semibold">Check Status</h1>
          <div className="mb-2">
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none"
              placeholder="Input Field"
            />
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg">
              Details
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2">ID: 12345</p>
          <p className="mb-2">Maker: John Doe</p>
          <p className="mb-2">Seller: Jane Smith</p>
          <p className="mb-2">Buyer: Alice Johnson</p>
          <p className="mb-2">Weight: 100 grams</p>
        </div>
      </div>
    </section>
  );
};

export default Maker;
