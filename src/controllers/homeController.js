import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePages.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {  // Thay 'e' thành 'error' cho đồng nhất
        console.log(error);  // Sửa 'e' thành 'error' để in ra lỗi
    }
};

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
};

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};
let getUserCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    console.log(data);
    return res.render('getUserCRUD.ejs', {
        data: data
    });
};

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.send('post crud to server');
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getUserCRUD: getUserCRUD,
};
