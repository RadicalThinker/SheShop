import  { useState } from "react";

const ListProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        sizes: "",
        image: null
    });
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProduct({ ...product, image: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Listed:", product);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 border rounded-xl shadow-md bg-white">
            <h2 className="text-lg font-medium text-gray-700 mb-4">List a Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    value={product.name} 
                    onChange={handleChange} 
                    placeholder="Product Name" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    required
                />
                <textarea 
                    name="description" 
                    value={product.description} 
                    onChange={handleChange} 
                    placeholder="Product Description" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    required
                ></textarea>
                <input 
                    type="text" 
                    name="sizes" 
                    value={product.sizes} 
                    onChange={handleChange} 
                    placeholder="Available Sizes (e.g., S, M, L, XL)" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    required
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="w-full p-2 border rounded-lg bg-gray-100 cursor-pointer" 
                    required
                />
                {preview && <img src={preview} alt="Product Preview" className="w-full h-40 object-cover rounded-lg mt-2" />}
                <button type="submit" className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                    List Product
                </button>
            </form>
        </div>
    );
};

export default ListProduct;
