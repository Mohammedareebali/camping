"use strict";
// ReviewPopup.tsx
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ReviewPopup = ({ show, handleClose, handleSave }) => {
    const [review, setReview] = (0, react_1.useState)("");
    const [emojiRating, setEmojiRating] = (0, react_1.useState)(0);
    const handleSubmit = () => {
        handleSave(review, emojiRating);
        setReview("");
        setEmojiRating(0);
    };
    const selectEmoji = (rating) => {
        setEmojiRating(rating);
    };
    return (react_1.default.createElement(react_bootstrap_1.Modal, { show: show, onHide: handleClose },
        react_1.default.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            react_1.default.createElement(react_bootstrap_1.Modal.Title, null, "Add Review")),
        react_1.default.createElement(react_bootstrap_1.Modal.Body, null,
            react_1.default.createElement(react_bootstrap_1.Form, null,
                react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "emojiRating" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "How would you rate this camp?"),
                    react_1.default.createElement("div", { className: "emoji-rating" },
                        react_1.default.createElement("span", { className: `emoji ${emojiRating === 1 ? "selected" : ""}`, onClick: () => selectEmoji(1) }, "\uD83D\uDE1E"),
                        react_1.default.createElement("span", { className: `emoji ${emojiRating === 2 ? "selected" : ""}`, onClick: () => selectEmoji(2) }, "\u2639\uFE0F"),
                        react_1.default.createElement("span", { className: `emoji ${emojiRating === 3 ? "selected" : ""}`, onClick: () => selectEmoji(3) }, "\uD83D\uDE42"),
                        react_1.default.createElement("span", { className: `emoji ${emojiRating === 4 ? "selected" : ""}`, onClick: () => selectEmoji(4) }, "\uD83D\uDE03"),
                        react_1.default.createElement("span", { className: `emoji ${emojiRating === 5 ? "selected" : ""}`, onClick: () => selectEmoji(5) }, "\uD83D\uDE01"))),
                react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "reviewText" },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Describe why:"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, { as: "textarea", rows: 3, value: review, onChange: (e) => setReview(e.target.value) })))),
        react_1.default.createElement(react_bootstrap_1.Modal.Footer, null,
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "secondary", onClick: handleClose }, "Close"),
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: handleSubmit }, "Save Review"))));
};
exports.default = ReviewPopup;
//# sourceMappingURL=ReviewPopup.js.map