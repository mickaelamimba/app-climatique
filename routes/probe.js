const {probeCreat,probeGet} = require("../controllers/probe");
const probeRouters =(app)=>{
    app.get('/sonde',probeGet)
    app.post('/import-sonde', probeCreat)
}
module.exports = probeRouters