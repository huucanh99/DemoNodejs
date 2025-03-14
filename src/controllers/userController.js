import userService from '../services/userService';
let handleLogin = async (req, res) => {
    try {
        let email = req.body.email
        let password = req.body.password
        if (!email || !password) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing  inputs parameters!',
            });
        }
        let userData = await userService.handleUserLogin(email, password);
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user : {}
        })
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        });
    }

}
let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; //All or id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters!',
            user: []
        })
    }
    if (id) {
        let user = await userService.getAllUsers(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Ok',
            user
        })
    }


}
let handleCreateUser = async (req, res) => {
    let message = await userService.createNewUser(req.body)
    return res.status(200).json(message);
}
let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUser(data);
    return res.status(200).json(message);
}
let handledeleteUser = async (req, res) => {
    if (!req.query.id) {
        return res.status(200).json({
            errCode: 1,
            message: `Missing some parameters!`
        })

    }
    let message = await userService.deleteUser(req.query.id);
    return res.status(200).json(message);
}
let getAllCode = async (req, res) => {
    try {
        let data = await userService.getAllCodeService(req.query.type);
        console.log(data);
        return res.status(200).json(data);
    } catch (e) {
        console.log('get all code error :', e)
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateUser: handleCreateUser,
    handleEditUser: handleEditUser,
    handledeleteUser: handledeleteUser,
    getAllCode: getAllCode,
};
