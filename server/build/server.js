"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("How cool");
});
app.listen(PORT, () => {
    console.log(`Listening on server "http://localhost/${PORT}"`);
});
