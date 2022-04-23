"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const orders_1 = require("../../models/orders");
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
const store = new orders_1.OrderStore();
describe('Test index response', () => {
    it('orders Model index', async () => {
        const result = await store.index();
        expect(result).toBeDefined();
    });
});
