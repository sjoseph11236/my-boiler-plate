const { db } = require('../server/db');
const {green, red} = require('chalk');

const seed = async() => {
  await db.sync({force: true});






  console.log(green('Seeding success!'));
  db.close();
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'));
    console.error(err);
    db.close();
  });