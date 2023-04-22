import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "review-display", children: reviews.map((review, index) => (_jsxs("div", { className: "review", children: [_jsx("div", { className: "emoji", children: getEmoji(review.emojiRating) }), _jsxs("div", { className: "comment", children: [_jsx("div", { children: review.comment }), _jsxs("div", { className: "review-meta", children: [_jsxs("span", { children: ["Posted by ", review.postedBy, " "] }), _jsxs("span", { children: ["on ", formatDate(review.createdAt)] })] })] })] }, index))) }));
};
export default ReviewDisplay;
//# sourceMappingURL=ReviewDisplay.js.map