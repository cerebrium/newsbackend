"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// instantiate the app
const app = express_1.default();
const port = process.env.PORT || 3001; // default port to listen
// middleware
app.use(cors_1.default());
// controllers
const newsRoute = __importStar(require("./routes/news"));
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// define the routes
app.use('/news', newsRoute.index);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('running on port: ', port);
});
