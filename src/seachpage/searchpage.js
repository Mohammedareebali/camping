"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Nav_1 = __importDefault(require("../components/Nav"));
const SearchForm_1 = __importDefault(require("./SearchForm"));
function Searchpage() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Nav_1.default, null),
        react_1.default.createElement(SearchForm_1.default, null)));
}
exports.default = Searchpage;
//# sourceMappingURL=searchpage.js.map