import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "react-stepper-horizontal";
import { useNavigate } from 'react-router-dom';
import PreviewCampground from './PreviewCampground';
import NavComponent from 'components/Nav';
const NewCampForm = ({ token }) => {
    const [name, setName] = useState('');
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isAuthenticated') === 'true');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [bed, setBed] = useState('');
    const [price, setPrice] = useState('');
    const [wifi, setWifi] = useState(false);
    const [image, setImage] = useState(null);
    const [step, setStep] = useState(0);
    const steps = [
        { title: "Basic Info" },
        { title: "Amenities" },
        { title: "Image" },
        { title: "Preview" },
    ];
    // calling out use navigate
    const navigate = useNavigate();
    const backendUrl = 'https://yelcamp-backend.herokuapp.com';
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('name', name);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('bed', Number(bed).toString());
        formData.append('price', Number(price).toString());
        formData.append('wifi', wifi.toString());
        try {
            const res = await fetch(`${backendUrl}/camps`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            const data = await res.json();
            setName('');
            setLocation('');
            setDescription('');
            setBed('');
            setPrice('');
            setWifi(false);
            setImage(null);
            navigate('/search');
        }
        catch (error) {
            console.log(error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(NavComponent, { loggedIn: loggedIn }), _jsxs("form", { onSubmit: handleSubmit, className: `bg-dark text-white p-3 add`, children: [_jsx("h2", { className: "text-center", children: "Add New Camp" }), _jsx(Stepper, { activeStep: step, steps: steps }), _jsxs("main", { className: 'stepgroup', children: [step === 0 && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Name:" }), _jsx("input", { type: "text", id: "name", value: name, onChange: (event) => setName(event.target.value), className: "form-control" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "location", children: "Location:" }), _jsx("input", { type: "text", id: "location", value: location, onChange: (event) => setLocation(event.target.value), className: "form-control" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "description", children: "Description:" }), _jsx("textarea", { id: "description", value: description, onChange: (event) => setDescription(event.target.value), className: "form-control" })] })] })), step === 1 && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "bed", children: "Number of beds:" }), _jsx("input", { type: "number", id: "bed", value: bed, onChange: (event) => setBed(event.target.value === '' ? '' : parseInt(event.target.value)), className: "form-control" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "price", children: "Price:" }), _jsx("input", { type: "number", id: "price", value: price, onChange: (event) => setPrice(event.target.value === '' ? '' : parseInt(event.target.value)), className: "form-control" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "wifi", children: "Wifi:" }), _jsxs("select", { id: "wifi", value: wifi, onChange: (event) => setWifi(event.target.value), className: "form-control", children: [_jsx("option", { value: "", children: "Select Wifi" }), _jsx("option", { value: "true", children: "True" }), _jsx("option", { value: "false", children: "False" })] })] })] })), step === 2 && (_jsx(_Fragment, { children: _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "image", children: "Image:" }), _jsx("input", { type: "file", name: 'file', id: "image", onChange: (event) => setImage(event.target.files[0]), className: "form-control" })] }) })), step === 3 && (_jsx(_Fragment, { children: _jsx(PreviewCampground, { name: name, location: location, description: description, bed: bed, price: price, wifi: wifi, image: image }) })), _jsxs("div", { className: "d-flex justify-content-between mt-3", children: [_jsx("button", { type: "button", className: "btn btn-warning", onClick: () => setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0)), disabled: step === 0, children: "Back" }), _jsx("button", { type: "button", className: "btn btn-warning", onClick: () => {
                                            if (step < steps.length - 1) {
                                                setStep(step + 1);
                                            }
                                            else {
                                                handleSubmit();
                                            }
                                        }, children: step === steps.length - 1 ? 'Submit' : 'Next' })] })] })] })] }));
};
export default NewCampForm;
//# sourceMappingURL=NewCampForm.js.map