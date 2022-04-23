"use strict";
// #### Orders
// - Current Order by user (args: user id)[token required]
// - [OPTIONAL] Completed Orders by user (args: user id)[token required]
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const AuthToken_1 = __importDefault(require("./AuthToken"));
const store = new orders_1.OrderStore();
const index = async (_req, res) => {
    const order = await store.index();
    res.json(order);
};
const orderRoutes = (app) => {
    app.get('/orders/:id', AuthToken_1.default, index);
};
exports.default = orderRoutes;
