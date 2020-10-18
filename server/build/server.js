"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Cors
const cors_1 = __importDefault(require("cors"));
// Body Parser
const body_parser_1 = __importDefault(require("body-parser"));
// App Instance
const app = express_1.default();
// Body Parser Enabled
app.use(body_parser_1.default.json());
// Cors Enabled according to env
if (process.env.NODE_ENV !== 'production') {
    app.use(cors_1.default());
}
// Defined PORT
const PORT = process.env.PORT || 5000;
// Routes
app.get('/', (req, res) => {
    res.send("How cool");
});
app.post("/api/hello", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    res.send(req.body);
});
// Listrening on port
app.listen(PORT, () => {
    console.log(`Listening on server "http://localhost/${PORT}"`);
});
