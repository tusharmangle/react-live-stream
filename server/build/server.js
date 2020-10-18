"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// Cors
const cors_1 = __importDefault(require("cors"));
// Body Parser
const body_parser_1 = __importDefault(require("body-parser"));
// Bcrypt
const bcrypt_1 = __importDefault(require("bcrypt"));
// import User Model
const users_1 = __importDefault(require("./models/users"));
// MongoDB Connection
mongoose_1.default.connect('mongodb://localhost:27017/tman-live', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
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
app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new users_1.default({
            email: email,
            password: bcrypt_1.default.hashSync(password, 10),
        });
        await user.save();
        res.send(user);
    }
    catch (error) {
        res.status(400);
        res.send({
            error: "duplicate entry found"
        });
    }
});
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await users_1.default.findOne({
        email,
        password: bcrypt_1.default.hashSync(password, 10)
    });
    res.send(user);
});
// Listrening on port
app.listen(PORT, () => {
    console.log(`Listening on server "http://localhost/${PORT}"`);
});
