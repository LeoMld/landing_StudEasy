const express = require('express');
const route = express.Router();

route.post("/registration", (req,res) => {
    // We retrieve the json sent by the client
    const signUpInfo = req.body;
    console.log("Email : "+signUpInfo.email+
        "\nLastName : "+signUpInfo.lastName+
        "\nFirstName : "+signUpInfo.firstName)
    // Response sent to the client
    res.send({message : "All good !"})
})

module.exports = route;