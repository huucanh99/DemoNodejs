const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('beodeptraiok', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307, // Đổi port thành 3307 như bạn đã cấu hình
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDB;
