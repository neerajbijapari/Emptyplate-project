import { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [dishes, setDishes] = useState([]);
  const [form, setForm] = useState({ name: "", poster: "", description: "", price: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const fetchDishes = async () => {
    try {
      console.log("Fetching dishes...");
      const res = await axios.get("http://127.0.0.1:8000/api/dish/list");
      console.log("Dishes fetched:", res.data.list);
      setDishes(res.data.list || []); 
    } catch (err) {
      console.error("Error fetching dishes:", err);
      setDishes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddOrUpdate = async () => {
    if (!form.name || !form.poster || !form.description || !form.price) {
      alert("Fill all fields!");
      return;
    }

    try {
      if (editId) {
        console.log("Updating dish:", editId, form);
        await axios.put(`http://127.0.0.1:8000/api/dish/update/${editId}/`, form);
        setEditId(null);
      } else {
        console.log("Adding new dish:", form);
        await axios.post("http://127.0.0.1:8000/api/dish/add/", form);
      }
      setForm({ name: "", poster: "", description: "", price: "" });
      fetchDishes();
    } catch (err) {
      console.error("Error adding/updating dish:", err);
    }
  };

  const handleEdit = (dish) => {
    console.log("Editing dish:", dish);
    setForm({
      name: dish.name,
      poster: dish.poster,
      description: dish.description,
      price: dish.price,
    });
    setEditId(dish.id);
  };

  const handleDelete = async (id) => {
    try {
      console.log("Deleting dish:", id);
      await axios.delete(`http://127.0.0.1:8000/api/dish/delete/${id}/`);
      fetchDishes();
    } catch (err) {
      console.error("Error deleting dish:", err);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      
      <div className="bg-gray-100 p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Edit Dish" : "Add Dish"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Dish Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="poster"
            placeholder="Poster URL"
            value={form.poster}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="p-2 border rounded col-span-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAddOrUpdate}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {editId ? "Update Dish" : "Add Dish"}
        </button>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Poster</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <tr key={dish.id} className="text-center">
                  <td className="py-2 px-4 border">{dish.name}</td>
                  <td className="py-2 px-4 border">
                    <img src={dish.poster} alt={dish.name} className="w-20 mx-auto" />
                  </td>
                  <td className="py-2 px-4 border">{dish.description}</td>
                  <td className="py-2 px-4 border">₹{dish.price}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEdit(dish)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(dish.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No dishes available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
