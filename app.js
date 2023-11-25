const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

// Define routes
app.get('/', (req, res) => {
    //res.sendFile()
})

// Create Bet GET
app.get('/create_bet', (req, res) =>{
    debugger;
    res.sendFile(path.join(__dirname, 'views/create_bet.html'));
    console.log('create bet');
})

// Create User GET
app.get('/create_user', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/create_user.html'));
})

// Browse GET
app.get('/browse', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/browse.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'));
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
