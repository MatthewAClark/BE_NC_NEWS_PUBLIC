/* eslint-disable no-console*/
const app = require('./server.js');
const PORT = process.env.PORT;

// Turn on the server
//
app.listen(PORT, function (err) {
  if(err) return console.log(err);
  console.log(`App listening on port ${PORT}`);
});
