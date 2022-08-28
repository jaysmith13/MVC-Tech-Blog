const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'eMartinez',
    email: 'emartinez@fakemail.com',
    password: 'password123'
  },
  {
    username: 'mZiolokoski',
    email: 'mZiolokoski@fakemail.com',
    password: 'password123'
  },
  {
    username: 'mHoward',
    email: 'mHoward@fakemail.com',
    password: 'password123'
  },
  {
    username: 'jSmith',
    email: 'jSmith@fakemail.com',
    password: 'password123'
  },
  {
    username: 'kRodriguez',
    email: 'KRodriguez',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;