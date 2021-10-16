const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
const cors = require('cors')
const upload = require('express-fileupload')


const indexRouter = require('./routes/index');
const customerRouters = require("./routes/customer");
const userRouters = require("./routes/user");
const mongoose = require("mongoose");
const models = require('./models')
const getRoleMiddleware = require("./utils/getRoleMiddeleware");
const probeRouters = require("./routes/probe");



const app = express();
app.options('*', cors())
app.use(cors({
    credentials: true, origin: true,

}))
app.use(helmet());
mongoose.connect("mongodb://localhost:27017/climatique",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
app.use(getRoleMiddleware)
app.set('models',models)
app.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client','build')));

customerRouters(app)
userRouters(app)
probeRouters(app)
app.use('/', indexRouter);
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname+'/client/build/index.html'))
})


module.exports = app;
