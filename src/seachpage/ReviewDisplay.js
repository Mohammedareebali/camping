"use strict";
// ReviewDisplay.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const getEmoji = (rating) => {
    const emojis = ["😡", "😞", "😐", "😃", "😍"];
    if (rating < 1 || rating > 5)
        return "❓";
    return emojis[rating - 1];
};
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
const ReviewDisplay = ({ reviews }) => {
    return (react_1.default.createElement("div", { className: "review-display" }, reviews.map((review, index) => (react_1.default.createElement("div", { className: "review", key: index },
        react_1.default.createElement("div", { className: "emoji" }, getEmoji(review.emojiRating)),
        react_1.default.createElement("div", { className: "comment" },
            react_1.default.createElement("div", null, review.comment),
            react_1.default.createElement("div", { className: "review-meta" },
                react_1.default.createElement("span", null,
                    "Posted by ",
                    review.postedBy,
                    " "),
                react_1.default.createElement("span", null,
                    "on ",
                    formatDate(review.createdAt)))))))));
};
exports.default = ReviewDisplay;
//# sourceMappingURL=ReviewDisplay.js.map