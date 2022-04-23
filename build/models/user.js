"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
// #### User
// - id
// - firstName
// - lastName
// - password
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PEPPER, SALT_ROUNDS } = process.env;
class UserStore {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const sql = 'Select * Form users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`cannot get user ${err}`);
        }
    }
    async show(id) {
        try {
            const sql = 'SELECT * FROM users WHERE id=($1)';
            // @ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not get user ${id}. Error: ${err}`);
        }
    }
    async create(u) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO users (first-name,last-name,password_digest) VALUES($1, $2) RETURNING *';
            const hash = bcrypt_1.default.hashSync(
            //@ts-ignore
            u.password + PEPPER, parseInt(SALT_ROUNDS));
            const result = await conn.query(sql, [u.firstName, u.lastName, hash]);
            const user = result.rows[0];
            conn.release();
            return user;
        }
        catch (err) {
            throw new Error(`unable create user (${u.firstName}): ${err}`);
        }
    }
}
exports.UserStore = UserStore;
