"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const axios_1 = __importDefault(require("axios"));
exports.index = (req, res) => {
    const getData = (url) => {
        axios_1.default.get(url).then(response => {
            // tslint:disable-next-line:no-console
            console.log(response.data);
            res.status(200).send(response.data);
            return response.data;
        });
    };
    getData('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-07&sortBy=publishedAt&apiKey=28302bdeeaec4bfcbeb7fe7a7ab97a84');
};
