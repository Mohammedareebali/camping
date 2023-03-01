"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const img = require('../pics/icon-small.png');
const camp = require('../pics/camp.png');
function Main() {
    return (react_1.default.createElement("div", { className: "containers" },
        react_1.default.createElement("section", { className: "login-form" },
            react_1.default.createElement("div", { className: 'logo-text' },
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null,
                        " ",
                        react_1.default.createElement("img", { src: img, alt: 'this' }),
                        "yelpCamp"))),
            react_1.default.createElement("div", { className: "forms" },
                react_1.default.createElement("h2", null,
                    react_1.default.createElement("b", null, "Start exploring camps from all over around the world")),
                react_1.default.createElement("p", null,
                    "Not a user yet? ",
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/signup" }, "Create an account")))),
        react_1.default.createElement("section", { className: "testimonial campImg" })));
}
exports.default = Main;
//# sourceMappingURL=Main.js.map