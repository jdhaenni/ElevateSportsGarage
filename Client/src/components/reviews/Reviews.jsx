import React, { useState, useEffect } from "react";
import { fetchAllReviews } from "../../api/ReviewsApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchAllReviews();
        setReviews(data);
      } catch (error) {
        console.error("error fetching reviews", error);
      }
    };
    loadReviews();
  }, []);

  useEffect(() => {
    if (!reviews || reviews.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, reviews]);

  const handlePrev = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className="star"
          style={{
            color: i < count ? "gold" : "silver",
          }}
        />
      );
    }
    return stars;
  };

  if (!reviews || reviews.length === 0)
    return (
      <div className="reviews-container no-reviews">
        <h2 className="reviews-title"> add some review title </h2>
        <p>No reviews available</p>
      </div>
    );

  const currentReview = reviews[currentIndex];

  return (
    <div className="reviews-container">
      <h2 className="reviews-title"> add some review title </h2>

      <div className="reviews">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="review-card">
          <h3 className="reviewer-name">{currentReview.name}</h3>
          <div className="review-stars">
            {renderStars(currentReview.rating)}
          </div>
          <p className="review-date">{currentReview.date}</p>
          <p className="review-text">{currentReview.body}</p>
        </div>

        <button className="arrow-btn right-arrow" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
