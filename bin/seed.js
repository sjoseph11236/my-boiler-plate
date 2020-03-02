const { db, User } = require('../server/db');
const users = require('./data/user.json');
const {green, red} = require('chalk');

const seed = async() => {
  await db.sync({force: true});
  
  await User.bulkCreate(users);
  
  console.log(green('Seeding success!'));
  db.close();
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'));
    console.error(err);
    db.close();
  });