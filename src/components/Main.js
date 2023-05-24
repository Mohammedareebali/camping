import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const img = require('../pics/icon-small.png');
const campimage = require('../pics/heroimage.jpg');
const campimageT = require('../pics/heroiamgeT.jpg');
const checkmark = require('../pics/checkmark.svg').default;
const booking = require('../pics/Booking.svg').default;
const airbnb = require('../pics/Airbnb.svg').default;
const plumguide = require('../pics/Plumguide.svg').default;
const Main = () => {
    return (_jsxs("div", { className: "main-container", children: [_jsxs("section", { className: "intro-section", children: [_jsx("div", { className: 'logo-container', children: _jsx("p", { children: _jsxs("b", { children: [_jsx("img", { src: img, alt: 'YelpCamp logo', className: 'logo-image' }), "yelpCamp"] }) }) }), _jsxs("div", { className: "intro-text-container", children: [_jsx("h1", { className: 'intro-title', children: _jsx("b", { children: "Explore the best camps on Earth." }) }), _jsx("p", { className: 'intro-description', children: "YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews." }), _jsx("div", { className: 'features-container', children: _jsxs("ul", { className: 'features-list', children: [_jsxs("li", { className: 'feature-item', children: [_jsx("img", { src: checkmark, alt: 'checkmark', className: 'checkmark-image' }), "Add your own camp suggestions."] }), _jsxs("li", { className: 'feature-item', children: [_jsx("img", { src: checkmark, alt: 'checkmark', className: 'checkmark-image' }), "Leave reviews and experiences"] }), _jsxs("li", { className: 'feature-item', children: [_jsx("img", { src: checkmark, alt: 'checkmark', className: 'checkmark-image' }), "See locations for all camps"] })] }) }), _jsx("div", { className: 'button-container', children: _jsx(Button, { variant: 'dark', className: 'view-button', children: _jsx(Link, { to: '/search', className: 'button-link', children: "View Campgrounds" }) }) }), _jsxs("div", { className: "partners-container", children: [_jsx("p", { className: 'partners-title', children: _jsx("b", { children: "Partnered with:" }) }), _jsxs("div", { className: 'partner-logos-container', children: [_jsx("img", { src: booking, alt: 'booking', className: 'partner-logo' }), _jsx("img", { src: airbnb, alt: 'airbnb', className: 'partner-logo' }), _jsx("img", { src: plumguide, alt: 'plumguide', className: 'partner-logo' })] })] })] })] }), _jsxs("section", { className: "images-section", children: [_jsx("img", { src: campimageT, alt: 'Campsite', className: 'camp-image-top' }), _jsx("img", { src: campimage, alt: 'Campsite', className: 'camp-image-bottom' })] }), _jsx("section", { className: 'logo-section2', children: _jsx("p", { children: _jsxs("b", { children: [_jsx("img", { src: img, alt: 'YelpCamp logo', className: 'logo-image' }), "yelpCamp"] }) }) })] }));
};
export default Main;
//# sourceMappingURL=Main.js.map