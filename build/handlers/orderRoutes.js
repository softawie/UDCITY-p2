"use strict";
// #### Orders
// - Current Order by user (args: user id)[token required]
// - [OPTIONAL] Completed Orders by user (args: user id)[token required]
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const store = new orders_1.OrderStore();
const index = async (_req, res) => {
    const order = await store.index();
    res.json(order);
};
const orderRoutes = (app) => {
    app.get('/orders/:id', index);
};
exports.default = orderRoutes;
