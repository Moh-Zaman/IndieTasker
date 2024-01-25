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

let db = new sqlite3.Database("users.db", (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("Connected to the database");
});

app.post("/validatePassword", (req, res) => {
    const { username, password } = req.body;
    db.all(`select * from users where username = '${username}' and password = '${password}'`, (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows.length > 0) {
            console.log(rows);
            res.json(rows);
        } else {
            res.send({ validation: false });
        }
    });
});

app.post("/register", (req, next) => {
    const { username, password, email, accType, firstname, lastname } = req.body;
    console.log(req.body);
    db.run("INSERT INTO users(username, password, email, accountType, name) VALUES (?, ?, ?, ?, ?)", [username, password, email, accType, firstname + " " + lastname], (err) => {
        if (err) {
            return next(err);
        }
        console.log("Record inserted successfully into credentials");
        // res.send({ success: true });
    });
});

app.post("/getUser", (req, res) => {
    const user = req.body.id;
    console.log(user);
    db.all(`SELECT * FROM users WHERE Id = '${user}'`, (err, rows) => {
        console.log(rows);
        res.json(rows);
    });
});

app.post("/getUserData", (req, res) => {
    const id = req.body;
    db.all(`SELECT * FROM users`, (err, rows) => {
        console.log(rows);
        res.json(rows);
    });
});

app.post("/getUserCountry", (req, res) => {
    const id = req.body.search;
    db.all(`SELECT * FROM users WHERE country = '${id}'`, (err, rows) => {
        console.log(rows);
        res.json(rows);
    });
});

app.post("/getUserName", (req, res) => {
    const id = req.body.search;
    db.all(`SELECT * FROM users WHERE name = '${id}'`, (err, rows) => {
        console.log(rows);
        res.json(rows);
    });
});

app.post("/getUserJob", (req, res) => {
    const id = req.body.search;
    db.all(`SELECT * FROM users WHERE jobTitle = '${id}'`, (err, rows) => {
        console.log(rows);
        res.json(rows);
    });
});

app.listen(3001, "localhost", () => {
    console.log("Express server started on port 3001");
});
