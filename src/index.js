const express = require('express'); // import thu vien (module) ben ngoai vao file
// require('express') se tra ve mot ham ( ham tao ung dung express)
const morgan = require('morgan');
const app = express(); // goi ham tao ung dung express , luc nay app chinh la dtg ung dung express
// dinh nghia route , middleware , listen port
const path = require('path');
const port = 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.set("view engine", 'pug');
app.set('views', path.join(__dirname, 'resources/views'));
app.use( morgan('combined'));
app.use( express.json());
app.use( express.urlencoded());
//Route
route(app);
const hehe = () => {
  console.log('hehe');
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// #TODO: --save-dev NODEMON
//  nodemon la thu vien auto restarting server whenever file have change .
// no chi can o dev thoi , production ko can nen khi install package thi install
//  vao dev dependences , cau lenh npm i nodemon --save-dev
