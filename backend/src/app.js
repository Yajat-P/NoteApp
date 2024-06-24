const express = require("express");
const cors = require('cors');

require("./db/mongoose.js");


const app = express();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());


const port = process.env.PORT || 8000;
app.use(cors());

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
