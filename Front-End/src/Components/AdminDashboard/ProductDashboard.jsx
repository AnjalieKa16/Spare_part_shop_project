import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [formData, setFormData] = useState({
        product_id: "",
        product_name: "",
        supplier_id: "",
        brand_name: "",
        description: "",
        quantity: "",
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/products", formData);
            alert("Product added successfully!");
            setFormData({
                product_id: "",
                product_name: "",
                supplier_id: "",
                brand_name: "",
                description: "",
                quantity: "",
            });
            fetchProducts();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <aside className="w-1/5 bg-gray-800 p-5">
                <h2 className="text-xl font-bold mb-4">Prasad Motors</h2>
                <nav>
                    <ul className="space-y-3">
                        <li className="p-2 bg-gray-700 rounded">Dashboard</li>
                        <li className="p-2 bg-gray-700 rounded">Product</li>
                        <li className="p-2 bg-gray-700 rounded">Employee</li>
                        <li className="p-2 bg-gray-700 rounded">Customers</li>
                        <li className="p-2 bg-gray-700 rounded">Suppliers</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <h1 className="text-2xl font-bold mb-6">Add Product</h1>

                <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded">
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(formData).map((key) => (
                            <input
                                key={key}
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                placeholder={key.replace("_", " ")}
                                className="p-2 bg-gray-700 rounded text-white"
                                required
                            />
                        ))}
                    </div>
                    <button type="submit" className="mt-4 px-4 py-2 bg-red-500 rounded">ADD</button>
                </form>

                <h2 className="text-xl font-bold mt-10">Product List</h2>
                <table className="w-full mt-4 bg-gray-800 rounded">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="p-2">Product ID</th>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Supplier ID</th>
                            <th className="p-2">Brand</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="text-center">
                                <td className="p-2">{product.product_id}</td>
                                <td className="p-2">{product.product_name}</td>
                                <td className="p-2">{product.supplier_id}</td>
                                <td className="p-2">{product.brand_name}</td>
                                <td className="p-2">{product.description}</td>
                                <td className="p-2">{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default App;
