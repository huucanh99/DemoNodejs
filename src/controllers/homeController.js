let getHomePage = (req, res) => {
    return res.render('homePages.ejs')
}
let getAboutPage = (req, res) => {
    return res.render('about.ejs')
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
} 