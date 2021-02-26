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

///// CODE SALE POUR TESTER LA LIAISON /////

const route = express.Router();
route.get("/test", (req, res) => {
    res.send({ message: "Le lien est fait !" });
})

app.use('/api/', route);

///// FIN DU SALE /////

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);