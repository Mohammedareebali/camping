"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const img = require('../pics/icon-small.png');
const checkmark = require('../pics/checkmark.svg').default;
const booking = require('../pics/Booking.svg').default;
const airbnb = require('../pics/Airbnb.svg').default;
const plumguide = require('../pics/Plumguide.svg').default;
function Main() {
    return (react_1.default.createElement("div", { className: "containers mainContainer" },
        react_1.default.createElement("section", { className: "login-form mainlogin" },
            react_1.default.createElement("div", { className: 'logo-text mainlogo' },
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null,
                        " ",
                        react_1.default.createElement("img", { src: img, alt: 'YelpCamp logo' }),
                        "yelpCamp"))),
            react_1.default.createElement("div", { className: "forms mainform" },
                react_1.default.createElement("h1", null,
                    react_1.default.createElement("b", null, "Explore the best camps on Earth.")),
                react_1.default.createElement("p", null, "YelpCamp is a curated list of the best camping spots on Earth. unfiltered and unbiased reviews."),
                react_1.default.createElement("div", { className: 'list' },
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("img", { src: checkmark, alt: 'checkmark' }),
                            "Add your own camp suggestions."),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("img", { src: checkmark, alt: 'checkmark' }),
                            "Leave reviews and experiences"),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("img", { src: checkmark, alt: 'checkmark' }),
                            "See locations for all camps"))),
                react_1.default.createElement("div", { className: 'view' },
                    react_1.default.createElement(react_bootstrap_1.Button, { variant: 'dark', className: 'color' },
                        react_1.default.createElement(react_router_dom_1.Link, { to: '/search' }, "View Campgrounds"))),
                react_1.default.createElement("div", { className: "partners" },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Partnered with:")),
                    react_1.default.createElement("div", { className: 'partner-logo' },
                        react_1.default.createElement("img", { src: booking, alt: 'booking' }),
                        react_1.default.createElement("img", { src: airbnb, alt: 'airbnb' }),
                        react_1.default.createElement("img", { src: plumguide, alt: 'plumguide' }))))),
        react_1.default.createElement("section", { className: "testimonial campImg" }),
        react_1.default.createElement("section", { className: 'logo-text n' },
            react_1.default.createElement("p", null,
                react_1.default.createElement("b", null,
                    " ",
                    react_1.default.createElement("img", { src: img, alt: 'YelpCamp logo' }),
                    "yelpCamp")))));
}
exports.default = Main;
//# sourceMappingURL=Main.js.map