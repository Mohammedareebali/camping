import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Card } from 'react-bootstrap';
const PreviewCampground = ({ name, location, description, bed, price, wifi, image, }) => {
    const [imageUrl, setImageUrl] = React.useState('');
    React.useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(image);
        }
        else {
            setImageUrl('');
        }
    }, [image]);
    return (_jsxs(Card, { className: "bg-dark text-white mt-3", children: [imageUrl && _jsx(Card.Img, { variant: "top", src: imageUrl }), _jsxs(Card.Body, { children: [_jsx(Card.Title, { children: name || 'Campground Name' }), _jsx(Card.Text, { children: description || 'Campground Description' }), _jsxs(Card.Text, { children: ["Location: ", location || 'Campground Location'] }), _jsxs(Card.Text, { children: ["Bed: ", bed || 'Number of Beds'] }), _jsxs(Card.Text, { children: ["Price: ", price || 'Campground Price'] }), _jsxs(Card.Text, { children: ["Wifi: ", wifi === 'true' ? 'Yes' : 'No'] })] })] }));
};
export default PreviewCampground;
//# sourceMappingURL=PreviewCampground.js.map