const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.set('view engine', 'html');
// Define routes

app.get('/', (req, res) => {
    //res.sendFile()
})

// Create Bet GET
app.get('/create_bet', (req, res) =>{
    res.sendFile('./views/create_bet.html');
    console.log('create bet');
})

// Create User GET
app.get('/create_user', (req, res) => {
    //res.render('create_user');
    console.log('create user');
})

// Browse GET
app.get('/browse', (req, res) => {
    //res.render('browse');
    console.log('browse');
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
