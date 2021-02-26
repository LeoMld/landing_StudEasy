const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
else {
    app.use(express.static(path.join(__dirname, 'client/build')))
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const registration = require('./registration/registration');
app.use('/api/', registration);

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);