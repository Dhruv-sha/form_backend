const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./utils/errorController');
const userRouter = require("./routes/userRouters");
const AppError = require('./utils/appError');

console.log(userRouter);

const app = express();


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use(express.json({ limit: "10kb" }));

app.use('/api/v1/users', userRouter);

app.all(/.*/, (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;