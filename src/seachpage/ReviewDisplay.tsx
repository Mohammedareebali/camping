<<<<<<< HEAD
import React from "react";
import { Accordion } from "react-bootstrap";

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
    <Accordion defaultActiveKey="0">
      {reviews.map((review, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>
            {getEmoji(review.emojiRating)} - Posted by {review.postedBy} on {formatDate(review.createdAt)}
          </Accordion.Header>
          <Accordion.Body>{review.comment}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ReviewDisplay;
=======
import React from "react";
import { Accordion } from "react-bootstrap";

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
    <Accordion defaultActiveKey="0">
      {reviews.map((review, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>
            {getEmoji(review.emojiRating)} - Posted by {review.postedBy} on {formatDate(review.createdAt)}
          </Accordion.Header>
          <Accordion.Body>{review.comment}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ReviewDisplay;
>>>>>>> 1ebec6a (fix:setup with backend)
