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
export default function Main() {
    return (_jsxs("div", { className: "containers mainContainer", children: [_jsxs("section", { className: "login-form mainlogin", children: [_jsx("div", { className: 'logo-text mainlogo', children: _jsx("p", { children: _jsxs("b", { children: [" ", _jsx("img", { src: img, alt: 'YelpCamp logo' }), "yelpCamp"] }) }) }), _jsxs("div", { className: "forms mainform", children: [_jsx("h1", { children: _jsx("b", { children: "Explore the best camps on Earth." }) }), _jsx("p", { children: "YelpCamp is a curated list of the best camping spots on Earth. unfiltered and unbiased reviews." }), _jsx("div", { className: 'list', children: _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("img", { src: checkmark, alt: 'checkmark' }), "Add your own camp suggestions."] }), _jsxs("li", { children: [_jsx("img", { src: checkmark, alt: 'checkmark' }), "Leave reviews and experiences"] }), _jsxs("li", { children: [_jsx("img", { src: checkmark, alt: 'checkmark' }), "See locations for all camps"] })] }) }), _jsx("div", { className: 'view', children: _jsx(Button, { variant: 'dark', className: 'color', children: _jsx(Link, { to: '/search', children: "View Campgrounds" }) }) }), _jsxs("div", { className: "partners", children: [_jsx("p", { children: _jsx("b", { children: "Partnered with:" }) }), _jsxs("div", { className: 'partner-logo', children: [_jsx("img", { src: booking, alt: 'booking' }), _jsx("img", { src: airbnb, alt: 'airbnb' }), _jsx("img", { src: plumguide, alt: 'plumguide' })] })] })] })] }), _jsxs("section", { className: "testimonial ", children: [_jsx("img", { src: campimageT, alt: 'this', className: 'imgt' }), _jsx("img", { src: campimage, alt: 'this', className: 'imgd' })] }), _jsx("section", { className: 'logo-text n', children: _jsx("p", { children: _jsxs("b", { children: [" ", _jsx("img", { src: img, alt: 'YelpCamp logo' }), "yelpCamp"] }) }) })] }));
}
//# sourceMappingURL=Main.js.map