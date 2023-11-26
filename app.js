// Define the Required Modules. 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Define the Application and PORT to Listen On
const app = express();
const PORT = 8080;
// Middleware to parse the body of POST requests --> This was Reccomended By a ChatGPT Snippet. 
app.use(bodyParser.urlencoded({ extended: true }));


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
    res.sendFile(path.join(__dirname, 'views/create_user2.html'));
})

// Create User POST
app.post('/create_user', (req, res) =>{
    // Assign Variables to all the Input
    const firstName = req.body['first-name'];
    const lastName = req.body['last-name'];
    const birthDate = req.body['birth-date'];
    const email = req.body['email'];
    const userName = req.body['user-name'];
    const password = req.body['password'];

    // -- Future Problem: Validate Unique User Name

    // Submit the User to the Database. 
    const sqlInsert = `INSERT INTO users (firstName, lastName, birthDate, email, userName, password, funds) VALUES
    (${firstName},${lastName},${birthDate},${email},${userName},${password}, 100);`;


});



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

// Initialize Application to Start listening. 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
