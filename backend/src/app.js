const express = require("express");
const cors = require("cors");

const { login, register } = require("./controller/UserController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend P2P Lending berjalan 🚀"
    });
});

app.post("/api/login", login);
app.post("/api/register", register);

module.exports = app;
