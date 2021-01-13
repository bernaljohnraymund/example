    // importing express framework
    const express = require("express");

    const app = express();

    // Respond with "hello world" for requests that hit our root "/"
    app.get("/", function (req, res) {
     return res.send("Hello test");
    });

    // listen to port 7000 by default
    app.listen(7000, () => {
      console.log("Server is running");
    });

    module.exports = app;
