const {customerGet, customerCreat, customerDelete, customerUpdate} = require("../controllers/customer");

const customerRouters =(app)=>{
    app.get('/customer',customerGet)
    app.post('/customer-post',customerCreat)
    app.post('/customer-delete',customerDelete)
    app.post('/customer-update',customerUpdate)

}
module.exports = customerRouters