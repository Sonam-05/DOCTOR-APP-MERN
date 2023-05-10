const express = require('express');
const colors = require('colors');
const cors = require('cors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

const app = express();

//config
dotenv.config();

//connected to mongodb
connectDb();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

const port = process.env.PORT || 5000;

//route
app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/admin', require('./routes/adminRoutes'))
app.use('/api/v1/doctor', require("./routes/doctorRoutes"))
app.use('/api/v1/feeds', require('./routes/feedbackRoutes'))

app.listen(port, () => {
    console.log(`Server is running on : ${process.env.PORT} in ${process.env.MODE}`.bgGreen.white)
})
