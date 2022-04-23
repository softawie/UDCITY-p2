"use strict";
// ## API Endpoints
// #### Products
// - Index 
// - Show
// - Create [token required]
// - [OPTIONAL] Top 5 most popular products 
// - [OPTIONAL] Products by category (args: product category)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const AuthToken_1 = __importDefault(require("./AuthToken"));
const store = new products_1.ProductStore();
const index = async (_req, res) => {
    try {
        const Products = await store.index();
        res.json(Products);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const show = async (req, res) => {
    const Product = await store.show(req.body.id);
    res.json(Product);
};
const create = async (req, res) => {
    try {
        const Product = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        };
        const newproduct = await store.create(Product);
        res.json(newproduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
// const destroy = async (req: Request, res: Response) => {
//   const deleted = await store.delete(req.body.id)
//   res.json(deleted)
// }
const productRoutes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', AuthToken_1.default, create);
};
exports.default = productRoutes;
