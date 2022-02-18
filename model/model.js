const Sequelize = require("sequelize");
const sequelize = require('../connection');

module.exports = sequelize.define("blog", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    published_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    
});