const Sequelize = require('sequelize');
const sequelizePrettyLogger = require('sequlize-pretty-logger')();
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: sequelizePrettyLogger});


const Page = (db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
}));

const User = (db.define('user', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true,
        validate: {
         isEmail: true
        }
    }
}));


module.exports = {db, Page, User}