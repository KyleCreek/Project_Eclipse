// Define the Required Modules. 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');

// Define Constants for SQL Tables TO support for Revisionse
const USER_TABLE = 'users';
const WAGER_TABLE = 'wagers';

// Define SQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password.7',
    database: 'TESTUSERS',
  });

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
    // -Note: Need to Change the Table Schema to Include the Email. 
    // Note 2: Also Might need to change the "Funds" To be the Venmo Handle. 
    const sqlInsert = `INSERT INTO ${USER_TABLE} (firstName, lastName, birthDate, userName, password, funds) VALUES
    ('${firstName}','${lastName}','${birthDate}','${userName}','${password}', 100);`;

    // Call the the Data Base to Add the User
    sqlQuery(sqlInsert);

    res.redirect('views/login.html');

});



// Browse GET
app.get('/browse', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/browse.html'));
})

// Browse POST


// Login GET
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'));
})

// Login POST
app.post('/login', (req, res) => {
    // Define Constants
    const user = req.body['username'];
    const pass = req.body['password'];
    
    // Make a call to the data base with the username and password
    const sqlInput = `SELECT * from ${USER_TABLE} WHERE userName = '${user}';`;
    const sqlResponse = sqlQuery(sqlInput);
    
    console.log('sql, response', typeof(sqlResponse));
    res.sendFile(path.join(__dirname, 'views/login.html'));

});


function sqlQuery(sqlText){
    let sqlReturn;
// Connect to the Database
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });
      
      // Perform MySQL operations here...
    connection.query(sqlText, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return;
          }
          sqlReturn = results;
          console.log(results);
        });
    // Close Connection When Listening Closes
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection:', err);
            return;
        }
        console.log('MySQL connection closed');
    });
    return sqlReturn;
};


// Initialize Application to Start listening. 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

