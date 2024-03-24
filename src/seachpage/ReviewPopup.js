import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
const ReviewPopup = ({ show, handleClose, handleSave }) => {
    const [review, setReview] = useState("");
    const [emojiRating, setEmojiRating] = useState(0);
    const handleSubmit = () => {
        handleSave(review, emojiRating);
        setReview("");
        setEmojiRating(0);
    };
    const selectEmoji = (rating) => {
        setEmojiRating(rating);
    };
    return (_jsxs(Modal, { show: show, onHide: handleClose, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Add Review" }) }), _jsx(Modal.Body, { children: _jsxs(Form, { children: [_jsxs(Form.Group, { controlId: "emojiRating", children: [_jsx(Form.Label, { children: "How would you rate this camp?" }), _jsxs("div", { className: "emoji-rating", children: [_jsx("span", { className: `emoji ${emojiRating === 1 ? "selected" : ""}`, onClick: () => selectEmoji(1), children: "\uD83D\uDE1E" }), _jsx("span", { className: `emoji ${emojiRating === 2 ? "selected" : ""}`, onClick: () => selectEmoji(2), children: "\u2639\uFE0F" }), _jsx("span", { className: `emoji ${emojiRating === 3 ? "selected" : ""}`, onClick: () => selectEmoji(3), children: "\uD83D\uDE42" }), _jsx("span", { className: `emoji ${emojiRating === 4 ? "selected" : ""}`, onClick: () => selectEmoji(4), children: "\uD83D\uDE03" }), _jsx("span", { className: `emoji ${emojiRating === 5 ? "selected" : ""}`, onClick: () => selectEmoji(5), children: "\uD83D\uDE01" })] })] }), _jsxs(Form.Group, { controlId: "reviewText", children: [_jsx(Form.Label, { children: "Describe why:" }), _jsx(Form.Control, { as: "textarea", rows: 3, value: review, onChange: (e) => setReview(e.target.value) })] })] }) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "secondary", onClick: handleClose, children: "Close" }), _jsx(Button, { variant: "primary", onClick: handleSubmit, children: "Save Review" })] })] }));
};
export default ReviewPopup;
//# sourceMappingURL=ReviewPopup.js.map