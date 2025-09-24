import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dishes() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/dish/list");
        setDishes(res.data.list || []);
      } catch (err) {
        console.error("Error fetching dishes:", err);
        setDishes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDishes();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Dishes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <div key={dish.id} className="bg-white shadow rounded overflow-hidden">
              <img
                src={dish.poster}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{dish.name}</h2>
                <p className="text-gray-700 mb-2">{dish.description}</p>
                <p className="text-gray-900 font-bold">₹{dish.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No dishes available.</p>
        )}
      </div>
    </div>
  );
}
