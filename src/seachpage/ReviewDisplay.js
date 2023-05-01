import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Accordion } from "react-bootstrap";
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
    return (_jsx(Accordion, { defaultActiveKey: "0", children: reviews.map((review, index) => (_jsxs(Accordion.Item, { eventKey: index.toString(), children: [_jsxs(Accordion.Header, { children: [getEmoji(review.emojiRating), " - Posted by ", review.postedBy, " on ", formatDate(review.createdAt)] }), _jsx(Accordion.Body, { children: review.comment })] }, index))) }));
};
export default ReviewDisplay;
//# sourceMappingURL=ReviewDisplay.js.map