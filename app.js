const express = require("express");
const app = express();
const createError = require("http-errors");

const port = process.env.PORT || 3000;



app.use((req, res, next) => {
    next(createError(404))
});

app.use((err, req, res, next) => {
    res.json({
        status: err.status,
        err: err.message
    })
})

app.listen(port, () => console.log(`Server ist am been`));