const { db } = require('./server/db');
const app = require('./server/server');
const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));

// Use when you have a database set up
db.sync({ force: true})
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
  });