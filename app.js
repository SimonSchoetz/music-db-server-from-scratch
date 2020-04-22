const express = require("express");
const app = express();
const createError = require("http-errors");

const indexRoute = require("./routes/indexRoute");
const musicRoute = require("./routes/musicRoute");

const port = process.env.PORT || 3000;

app.use(express.json()) //translate json into readable data

app.use("/", indexRoute);
app.use("/music", musicRoute);


//Error Handler
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