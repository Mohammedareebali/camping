// ReviewDisplay.tsx

import React from "react";


interface Review {
  emojiRating: number;
  comment: string;
  postedBy: string;
  createdAt: string;
}

interface Props {
  reviews: Review[];
}

const getEmoji = (rating: number): string => {
  const emojis = ["😡", "😞", "😐", "😃", "😍"];

  if (rating < 1 || rating > 5) return "❓";

  return emojis[rating - 1];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ReviewDisplay: React.FC<Props> = ({ reviews }) => {
  return (
    <div className="review-display">
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <div className="emoji">{getEmoji(review.emojiRating)}</div>
          <div className="comment">
            <div>{review.comment}</div>
            <div className="review-meta">
              <span>Posted by {review.postedBy} </span>
              <span>on {formatDate(review.createdAt)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewDisplay;
