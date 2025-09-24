import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-orange-100">
        <h1 className="text-5xl font-bold text-orange-700 mb-4">
          Welcome to DishMaster 🍔
        </h1>
        <p className="text-lg text-orange-800 mb-8 max-w-xl mx-auto">
          Discover delicious dishes, add your favorites, and explore a world of taste!
        </p>
        <Link
          to="/dishes"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
        >
          View Dishes
        </Link>
      </section>

      {/* Featured Dishes Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Static Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images5.alphacoders.com/433/433534.jpg"
              alt="Burger"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Burger</h3>
              <p className="text-gray-700 mb-2">Juicy and delicious burger with cheese.</p>
              <p className="text-gray-900 font-bold">₹110</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images8.alphacoders.com/917/thumb-1920-917165.jpg"
              alt="Hot Dog"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Hot Dog</h3>
              <p className="text-gray-700 mb-2">Classic hot dog with mustard and ketchup.</p>
              <p className="text-gray-900 font-bold">₹99</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://wallpapercave.com/wp/wp6619344.jpg"
              alt="Samosa"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Samosa</h3>
              <p className="text-gray-700 mb-2">Crispy and spicy potato-filled samosa.</p>
              <p className="text-gray-900 font-bold">₹25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-100 py-6 text-center text-orange-700 font-semibold">
        © 2025 DishMaster. All rights reserved.
      </footer>
    </div>
  );
}
