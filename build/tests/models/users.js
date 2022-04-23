"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const user_1 = require("../../models/user");
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
const store = new user_1.UserStore();
describe('Test endpoint response', () => {
    it('users Model index', async () => {
        const result = await store.index();
        expect(result).toBeDefined();
    });
    it('users Model index', async () => {
        //@ts-ignore
        const result = await store.create();
        expect(result).toBeDefined();
    });
    it(' should return index of users', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    });
});
