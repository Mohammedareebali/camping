// ReviewPopup.tsx

import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface ReviewPopupProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (review: string, emojiRating: number) => void;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({ show, handleClose, handleSave }) => {
  const [review, setReview] = useState("");
  const [emojiRating, setEmojiRating] = useState(0);

  const handleSubmit = () => {
    handleSave(review, emojiRating);
    setReview("");
    setEmojiRating(0);
  };

  const selectEmoji = (rating: number) => {
    setEmojiRating(rating);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="emojiRating">
            <Form.Label>How would you rate this camp?</Form.Label>
            <div className="emoji-rating">
              <span className={`emoji ${emojiRating === 1 ? "selected" : ""}`} onClick={() => selectEmoji(1)}>😞</span>
              <span className={`emoji ${emojiRating === 2 ? "selected" : ""}`} onClick={() => selectEmoji(2)}>☹️</span>
              <span className={`emoji ${emojiRating === 3 ? "selected" : ""}`} onClick={() => selectEmoji(3)}>🙂</span>
              <span className={`emoji ${emojiRating === 4 ? "selected" : ""}`} onClick={() => selectEmoji(4)}>😃</span>
              <span className={`emoji ${emojiRating === 5 ? "selected" : ""}`} onClick={() => selectEmoji(5)}>😁</span>
            </div>
          </Form.Group>
          <Form.Group controlId="reviewText">
            <Form.Label>Describe why:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewPopup;
