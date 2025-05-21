import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Star } from "lucide-react";

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your API call to submit the review
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Palate Pioneer | Review</title>
      </Helmet>

      <div className="p-6 min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
            Share Your Feedback
          </h1>

          {submitted ? (
            <div className="text-center text-lg font-semibold text-green-600">
              Thank you for your review!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Your Rating:
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`cursor-pointer ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      size={24}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Your Review:
                </label>
                <textarea
                  value={review}
                  onChange={handleReviewChange}
                  placeholder="Write your review here..."
                  className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-[#101135] text-white py-3 rounded-xl transition duration-300 font-semibold"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
