import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePages.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {  // Thay 'e' thành 'error' cho đồng nhất
    }
};

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
};

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};
let getUserCRUD = async (req, res) => {
    try {
        let data = await db.User.findAll();  // Lấy danh sách người dùng từ database
        return res.render('getUserCRUD.ejs', {
            data: data
        });
    } catch (error) {

    }
};

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server');
};
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    try {
        if (userId) {
            let userData = await CRUDservice.getUserInfoById(userId);
            if (userData) {
                return res.render('editCRUD.ejs', { user: userData });
            } else {
                return res.send('User not Found');
            }
        } else {
            return res.send('User not Found');
        }
    } catch (error) {
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data);
    return res.render('getUserCRUD.ejs', {
        data: allUsers
    });
}
let getDeleteIdCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDservice.DeleteCRUD(id);
        return res.send('Delete user succed!')
    }
    else {
        return res.send('not found User')

    }
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getUserCRUD: getUserCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    getDeleteIdCRUD: getDeleteIdCRUD,
};
