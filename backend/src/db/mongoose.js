const mongoose = require("mongoose");

const dbconnecturl = process.env.NOTEAPP_MONGODB_URL;

mongoose.connect(dbconnecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

