import React, { useState, useRef } from "react";

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState("description");
    const [reviews, setReviews] = useState([
        { text: "Great product, highly recommend!", media: [], rating: 5 },
        { text: "Good quality but took some time to arrive.", media: [], rating: 4 }
    ]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const fileURLs = Array.from(files).map(file => URL.createObjectURL(file));
            setReviews(prevReviews => [...prevReviews, { text: newReview, media: fileURLs, rating }]);
            setNewReview("");
            setRating(0);
        }
    };

    const handleReviewSubmit = () => {
        if (newReview.trim() !== "" && rating > 0) {
            setReviews(prevReviews => [...prevReviews, { text: newReview, media: [], rating }]);
            setNewReview("");
            setRating(0);
        }
    };

    return (
        <div className="w-full max-w-7xl mt-6 mx-auto p-6 shadow-md bg-white">
            <div className="flex justify-around border-b pb-3">
                <button className={`px-4 py-2 transition-colors duration-200 ${activeTab === "description" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`} onClick={() => setActiveTab("description")}>
                    Description
                </button>
                <button className={`px-4 py-2 transition-colors duration-200 ${activeTab === "reviews" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`} onClick={() => setActiveTab("reviews")}>
                    Reviews
                </button>
            </div>

            {activeTab === "description" && (
                <div className="mt-4 text-gray-700">
                    <h2 className="text-lg font-medium">Product Description</h2>
                    <p className="mt-2">This is an amazing product that provides great value and benefits.</p>
                </div>
            )}

            {activeTab === "reviews" && (
                <div className="mt-4">
                    <h2 className="text-lg font-medium text-gray-700">Customer Reviews</h2>
                    <div className="flex space-x-2 mt-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} onClick={() => setRating(star)} className={`text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}>
                                ★
                            </button>
                        ))}
                    </div>
                    <textarea 
                        value={newReview} 
                        onChange={(e) => setNewReview(e.target.value)} 
                        className="w-full p-3 border rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        placeholder="Write your review..."
                    ></textarea>
                    <input type="file" accept="image/*, video/*" multiple ref={fileInputRef} onChange={handleFileUpload} className="block w-full mt-3 p-2 bg-gray-100 border rounded-lg hover:bg-gray-200 cursor-pointer" />
                    <button onClick={handleReviewSubmit} className="mt-3 px-5 py-2 bg-gray-600 text-white border rounded-lg hover:bg-blue-300 transition-all duration-200">
                        Submit Review
                    </button>
                    <div className="mt-4">
                        {reviews.length === 0 ? <p className="text-gray-500">No reviews yet.</p> : (
                            reviews.map((review, index) => (
                                <div key={index} className=" p-3 mt-3 rounded-lg bg-gray-50">
                                    <div className="flex space-x-1 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-lg ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}>★</span>
                                        ))}
                                    </div>
                                    <p className="font-medium text-gray-700 mt-2">{review.text}</p>
                                    {review.media.map((src, i) => (
                                        src.includes("video") ? (
                                            <video key={i} src={src} controls className="w-full mt-3 rounded-lg" />
                                        ) : (
                                            <img key={i} src={src} alt="Review Media" className="w-full mt-3 rounded-lg" />
                                        )
                                    ))}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
