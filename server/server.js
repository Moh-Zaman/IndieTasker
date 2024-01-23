import express from "express";
const app = express();
import cors from "cors";
import sqlite3 from "sqlite3";

app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.json({ limit: "10mb" }));

let db = new sqlite3.Database("credentials.db", (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("Connected to the database");
});

app.post("/validatePassword", (req, res) => {
    const { username, password } = req.body;
    db.all(`select * from credentials where username = '${username}' and password = '${password}'`, (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows.length > 0) {
            res.send({ validation: true });
        } else {
            res.send({ validation: false });
        }
    });
});

app.post("/register", (req, res) => {
    const { username, password, email } = req.body;
    console.log(req.body);
    db.run("INSERT INTO credentials(username, password, email) VALUES (?, ?, ?)", [username, password, email], (err) => {
        if (err) {
            throw err;
        }
        console.log("Record inserted successfully");
        res.send({ success: true });
    });
});

app.listen(3001, "localhost", () => {
    console.log("Express server started on port 3001");
});
