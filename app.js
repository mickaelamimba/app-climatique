const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
const cors = require('cors')
const upload = require('express-fileupload')
const session = require('express-session')

const customerRouters = require("./routes/customer");
const userRouters = require("./routes/user");
const mongoose = require("mongoose");
const models = require('./models')
const getRoleMiddleware = require("./utils/getRoleMiddeleware");
const probeRouters = require("./routes/probe");
const MongoDBStore = require('connect-mongodb-session')(session);


const app = express();
app.options('*', cors())
app.use(cors({
    credentials: true, origin: true,

}))
const uri= "mongodb://localhost:27017/climatique"
app.use(helmet());
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
const store = new MongoDBStore({
    uri,
    collection:'userSession'
})
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: store
}))
app.use(getRoleMiddleware)
app.set('models',models)
app.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client','build')));
app.use(probeRouters)
app.use(customerRouters)
app.use(userRouters)



app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})


module.exports = app;
