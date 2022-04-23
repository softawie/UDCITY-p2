"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const products_1 = require("../../models/products");
const server_1 = __importDefault(require("../../server"));
// create a request object
const request = (0, supertest_1.default)(server_1.default);
const store = new products_1.ProductStore();
describe('Test endpoint response', () => {
    it('test hello world endpoint', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });
    it('test products with id endpoint', async () => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
    });
});
