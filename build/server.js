"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const handlers_1 = require("./handlers");
const app = (0, express_1.default)();
const address = '0.0.0.0:3000';
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello My Store!');
});
// @ts-ignore
(0, handlers_1.productRoutes)(app);
// @ts-ignore
(0, handlers_1.orderRoutes)(app);
// @ts-ignore
(0, handlers_1.userRoutes)(app);
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
