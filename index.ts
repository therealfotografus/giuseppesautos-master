const {google} = require("googleapis");
const express = require("express");
const bodyParser = require("body-parser");
const unique = require("array-unique");
const arraySort = require("array-sort");

// Vars
const sheetString = "1B6gIVSCGZjaGrw9Xxqk5zKv5K43pDEgAoZj5spsd30E";
const sheetString_About = "116qhps8aREtazTdZ4z_1qWkb7bPnZ14b2hCPEVepUFE";
const port = 80; 

var urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();

app.set("view engine", "ejs")
app.use("/imgs", express.static("imgs"));
app.use("/js", express.static("js"));
app.use("/css", express.static("css"));

// GET request handlers
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/rolunk", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "secrets.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
    
    const client = await auth.getClient();
    const sheets = google.sheets({version: "v4", auth: client});
    const sheetId = sheetString_About;

    const rows = await sheets.spreadsheets.values.get({
        auth,
        spreadsheetId: sheetId,
        range: "Munka1"
    });

    res.render("rolunk", {people: rows.data.values})
})
app.get("/katalogus", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "secrets.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
    
    const client = await auth.getClient();
    const sheets = google.sheets({version: "v4", auth: client});
    const sheetId = sheetString;

    const rows = await sheets.spreadsheets.values.get({
        auth,
        spreadsheetId: sheetId,
        range: "Giuseppe's Autos Listings"
    });

    var availableCars = [];

    for (let element of rows.data.values){
        availableCars[availableCars.length] = element[0]
    }
    availableCars.shift();
    arraySort(availableCars);
    unique(availableCars);

    /*
    rows.data.values.forEach(element => {
        rows2.data.value.array.forEach(element2 => {
            if(element[0] == element2[0]){
                availableCars[availableCars.length] = element[0]
            }
        });
    });
    */

    // Needed rows: A(1), B(2), J(10), K(11)

    res.render("katalogus", {rows: rows.data.values, availableCars});
})

// POST request handlers
app.post("/katalogus", urlencodedParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const auth = new google.auth.GoogleAuth({
        keyFile: "secrets.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
    
    const client = await auth.getClient();
    const sheets = google.sheets({version: "v4", auth: client});
    const sheetId = sheetString;

    const rows = await sheets.spreadsheets.values.get({
        auth,
        spreadsheetId: sheetId,
        range: "Giuseppe's Autos Listings"
    });

    const availableCars = [];

    for (let element of rows.data.values){
        availableCars[availableCars.length] = element[0]
    }
    availableCars.shift();
    arraySort(availableCars);
    unique(availableCars);

    /*
    rows.data.values.array.forEach(element => {
        rows2.data.value.array.forEach(element2 => {
            if(element[0] == element2[0]){
                availableCars[availableCars.length] = element[0]
            }
        });
    });
    */

    // Needed rows: A(1), B(2), J(10), K(11)

    res.render("katalogus-search", {rows: rows.data.values, search: req.body, availableCars});
})

app.listen(port, (req, res) => console.log(`Running on '${port}'`));