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
    //const description = document.getElementById('bet-description').value;
    //console.log(description);
})

// Create Bet POST


// Create User GET
app.get('/create_user', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/create_user.html'));
})

// Create User POST

// Browse GET
app.get('/browse', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/browse.html'));
})

// Browse POST


// Login GET
app.get('/login', (req,res)=>{
    res.send
    File(path.join(__dirname, 'views/login.html'));
})

// Login POST

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
