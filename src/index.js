const express = require("express");
const { PORT } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");

const StartServer = async () => {
    const app = express();

    await databaseConnection.sync()

    await expressApp(app);

    app.get("/", (req, res) => {
        res.send("Hello Indigo")
    })

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    }).on("error", (err) => {
        console.log(err);
        process.exit();
    });
};

StartServer();
