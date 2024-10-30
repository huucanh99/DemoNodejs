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
    let id = req.body.id; //All or id
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

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers
};
