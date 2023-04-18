"use strict";
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
require("bootstrap/dist/css/bootstrap.min.css");
const react_router_dom_1 = require("react-router-dom");
const NewCampForm = ({ token }) => {
    const [name, setName] = (0, react_1.useState)('');
    const [location, setLocation] = (0, react_1.useState)('');
    const [description, setDescription] = (0, react_1.useState)('');
    const [bed, setBed] = (0, react_1.useState)('');
    const [price, setPrice] = (0, react_1.useState)('');
    const [wifi, setWifi] = (0, react_1.useState)(false);
    const [image, setImage] = (0, react_1.useState)(null);
    // calling out use navigate
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', image);
        formData.append('name', name);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('bed', Number(bed).toString());
        formData.append('price', Number(price).toString());
        formData.append('wifi', wifi.toString());
        try {
            const res = await fetch('/camps', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { onSubmit: handleSubmit, className: "bg-light p-3 add" },
            react_1.default.createElement("h2", { className: "text-center" }, "Add New Camp"),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "name" }, "Name:"),
                react_1.default.createElement("input", { type: "text", id: "name", value: name, onChange: (event) => setName(event.target.value), className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "location" }, "Location:"),
                react_1.default.createElement("input", { type: "text", id: "location", value: location, onChange: (event) => setLocation(event.target.value), className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "description" }, "Description:"),
                react_1.default.createElement("textarea", { id: "description", value: description, onChange: (event) => setDescription(event.target.value), className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "bed" }, "Number of beds:"),
                react_1.default.createElement("input", { type: "number", id: "bed", value: bed, onChange: (event) => setBed(event.target.value === '' ? '' : parseInt(event.target.value)), className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "price" }, "Price:"),
                react_1.default.createElement("input", { type: "number", id: "price", value: price, onChange: (event) => setPrice(event.target.value === '' ? '' : parseInt(event.target.value)), className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "wifi" }, "Wifi:"),
                react_1.default.createElement("select", { id: "wifi", value: wifi, onChange: (event) => setWifi(event.target.value), className: "form-control" },
                    react_1.default.createElement("option", { value: "" }, "Select Wifi"),
                    react_1.default.createElement("option", { value: "true" }, "True"),
                    react_1.default.createElement("option", { value: "false" }, "False"))),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "image" }, "Image:"),
                react_1.default.createElement("input", { type: "file", name: 'file', id: "image", onChange: (event) => setImage(event.target.files[0]), className: "form-control" })),
            react_1.default.createElement("button", { type: "submit", className: "btn btn-primary btn-block" }, "Add Camp"))));
};
exports.default = NewCampForm;
//# sourceMappingURL=NewCampForm.js.map