import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(1);

    const product = {
        id: 1,
        name: "Fresh Apples",
        image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
        price: 2.5,
        description:
            "Crisp, juicy, and freshly picked apples. Perfect for snacking, baking, or cooking. These apples are organically grown and packed with nutrients.",
    };

    const handleAddToCart = () => {
        // Add to cart logic here
        console.log(`Added ${quantity} ${product.name}(s) to the cart.`);
    };

    const handleSubmitReview = () => {
        if (newReview) {
            const review = {
                id: reviews.length + 1,
                text: newReview,
                rating,
            };
            setReviews([review, ...reviews]);
            setNewReview("");
            setRating(1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-lg text-red-500 font-semibold mb-4">
                            ${product.price.toFixed(2)}
                        </p>
                        <p className="text-gray-700 mb-6">{product.description}</p>

                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-4 mb-6">
                            <button
                                className="px-3 py-1 bg-gray-200 rounded"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <span className="px-3 py-1 border">{quantity}</span>
                            <button
                                className="px-3 py-1 bg-gray-200 rounded"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full flex justify-center items-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                        >
                            <FaShoppingCart size={20} className="mr-2" />
                            Add to Cart
                        </button>
                    </div>


                    {/* Reviews Section */}
                    <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

                        {/* Review Submission Form */}
                        <div className="mb-6">
                            <textarea
                                className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                                rows="4"
                                placeholder="Write a review..."
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                            />
                            <div className="flex items-center mb-4">
                                <span className="mr-4">Rating:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        className={`px-2 py-1 ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={handleSubmitReview}
                                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                            >
                                Submit Review
                            </button>
                        </div>

                        {/* Displaying Reviews */}
                        <div>
                            {reviews.length === 0 ? (
                                <p>No reviews yet. Be the first to review this product!</p>
                            ) : (
                                reviews.map((review) => (
                                    <div key={review.id} className="border-b pb-4 mb-4">
                                        <div className="flex items-center mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-500">★</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-700">{review.text}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
