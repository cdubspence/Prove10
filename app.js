const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs')
.use(express.static(__dirname + '/public'))
.use('/', require('./prove10'))


app.listen(process.env.PORT || 3000);

