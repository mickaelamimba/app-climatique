const {userGet, userCreat, userUpdate, userDelete, userLogin} = require("../controllers/user");
const userRouters =(app)=>{
    app.get('/users',userGet)
    app.post('/user-post',userCreat)
    app.post('/login',userLogin)
    app.post('/user-update',userUpdate)
    app.post('/user-delete',userDelete)

}

module.exports = userRouters