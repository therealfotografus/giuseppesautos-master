var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var google = require("googleapis").google;
var express = require("express");
var bodyParser = require("body-parser");
var unique = require("array-unique");
var arraySort = require("array-sort");
// Vars
var sheetString = "1B6gIVSCGZjaGrw9Xxqk5zKv5K43pDEgAoZj5spsd30E";
var sheetString_About = "116qhps8aREtazTdZ4z_1qWkb7bPnZ14b2hCPEVepUFE";
var port = 80;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.set("view engine", "ejs");
app.use("/imgs", express.static("imgs"));
app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
// GET request handlers
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/rolunk", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var auth, client, sheets, sheetId, rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                auth = new google.auth.GoogleAuth({
                    keyFile: "secrets.json",
                    scopes: "https://www.googleapis.com/auth/spreadsheets"
                });
                return [4 /*yield*/, auth.getClient()];
            case 1:
                client = _a.sent();
                sheets = google.sheets({ version: "v4", auth: client });
                sheetId = sheetString_About;
                return [4 /*yield*/, sheets.spreadsheets.values.get({
                        auth: auth,
                        spreadsheetId: sheetId,
                        range: "Munka1"
                    })];
            case 2:
                rows = _a.sent();
                res.render("rolunk", { people: rows.data.values });
                return [2 /*return*/];
        }
    });
}); });
app.get("/katalogus", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var auth, client, sheets, sheetId, rows, availableCars, _i, _a, element;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                auth = new google.auth.GoogleAuth({
                    keyFile: "secrets.json",
                    scopes: "https://www.googleapis.com/auth/spreadsheets"
                });
                return [4 /*yield*/, auth.getClient()];
            case 1:
                client = _b.sent();
                sheets = google.sheets({ version: "v4", auth: client });
                sheetId = sheetString;
                return [4 /*yield*/, sheets.spreadsheets.values.get({
                        auth: auth,
                        spreadsheetId: sheetId,
                        range: "Giuseppe's Autos Listings"
                    })];
            case 2:
                rows = _b.sent();
                availableCars = [];
                for (_i = 0, _a = rows.data.values; _i < _a.length; _i++) {
                    element = _a[_i];
                    availableCars[availableCars.length] = element[0];
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
                res.render("katalogus", { rows: rows.data.values, availableCars: availableCars });
                return [2 /*return*/];
        }
    });
}); });
// POST request handlers
app.post("/katalogus", urlencodedParser, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var auth, client, sheets, sheetId, rows, availableCars, _i, _a, element;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!req.body)
                    return [2 /*return*/, res.sendStatus(400)];
                auth = new google.auth.GoogleAuth({
                    keyFile: "secrets.json",
                    scopes: "https://www.googleapis.com/auth/spreadsheets"
                });
                return [4 /*yield*/, auth.getClient()];
            case 1:
                client = _b.sent();
                sheets = google.sheets({ version: "v4", auth: client });
                sheetId = sheetString;
                return [4 /*yield*/, sheets.spreadsheets.values.get({
                        auth: auth,
                        spreadsheetId: sheetId,
                        range: "Giuseppe's Autos Listings"
                    })];
            case 2:
                rows = _b.sent();
                availableCars = [];
                for (_i = 0, _a = rows.data.values; _i < _a.length; _i++) {
                    element = _a[_i];
                    availableCars[availableCars.length] = element[0];
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
                res.render("katalogus-search", { rows: rows.data.values, search: req.body, availableCars: availableCars });
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function (req, res) { return console.log("Running on '" + port + "'"); });
