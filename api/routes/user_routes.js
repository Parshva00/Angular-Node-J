module.exports = function(app){
    var user = require('./user_controller');

    app.route('/getAllUsers').get(user.getAllUsers);
    app.route('/getUserById/:id').get(user.getUserById);
    app.route('/addUser').post(user.addUser);
    app.route('/editUser/:id').put(user.editUser);
    app.route('/deleteUser/:id').delete(user.deleteUser);
    app.route('/selectUserbyname').post(user.selectUserbyname);
}