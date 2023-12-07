// Using this area to Define the Objects Because I'm Too Dumb to KNow how to 
// properly import and Export at this time. 
// -- Start Object Definitions
// Defines the Wager Object
class wager {
    constructor(owner, description, ticketCost){
        this.id = this.generateId();
        this.owner = owner;
        this.description = description;
        this.ticketCost = ticketCost;
        this.available = true;
    }
        
      generateId(){
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000); // Adjust the range as needed
        const uniqueId = `${timestamp}-${random}`;
        return uniqueId;
      }
    };

// Defines the User Object
class user {
    constructor(firstName, lastName, birthDate, email, userName, password, venmoAccount){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.userID = this.generateID();
        this.venmoAccount = venmoAccount;
        this.saveUser();
        // Need A Field for what Will Ultimately be Payment Information
        // The Payment information might ned to be it's own object. 
    }
    generateID(){
      const timestamp = new Date().getTime();
      const random = Math.floor(Math.random() * 10000); // Adjust the range as needed
      const uniqueId = `${timestamp}-${random}`;
      return uniqueId;
    }
}

// -- Start Function Definitions 





// -- Begin Definition of Application and End Points

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
// This line is to help serve the Static Files in the js 
// Note: Need to learn WHY this works, but for now, it just does. 
app.use(express.static('public'));


// Define routes
app.get('/', (req, res) => {
    //res.sendFile()
})

// Create Wager Get Statement
app.get('/create_wager', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/create_wager.html'));
})

// Create Wager POST
app.post('/create_wager', (req, res) => {
    console.log(req.body);
    // Validate Input Logic Here

    // Create an Instance of a Bet Object
    //const newWager = new wager()

    // After Validation, Submit Make a Database Call to submit user

    // Return something to the user that let's them know that the
    // Wager was placed successfully.
    res.sendFile(path.join(__dirname, 'views/create_wager.html'));

});


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

    // Might also need to create an entirely new table to house all of the bets. 
    // Call the the Data Base to Add the User
    sqlQuery(sqlInsert);

    res.redirect('views/login.html');

});



// Browse GET
app.get('/browse', (req, res) => {

    // This might be the best place to perform the SQL Query.
    // From here we can pass the Information as Context to the HTML
    // and all the DOM has to do is go through the list and then
    // Display the information. 
    res.sendFile(path.join(__dirname, 'views/browse.html'));

    // Note: a 'reject' should simply affect the DOM, an 'accept'
    // Should send a POST request because there is going to be DATABASE Transactions 
    // for the bettor, and bet Object. 
})

// Browse POST


// Login GET
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'));

    /*
    When a Bet is accepted:
        1. Sufficient Funds Must Be Calculated
        2. Funds Must Be With Drawn from BOTH Accounts and sent to Purgatory (Maybe just 1, The Bettor 1 accounts should be withdrawn upon bet creation)
        3. Bettor1 Profile and Bets Must be Updated
        4. Bettor 2 Profile and Bets Must be Updated
        5. Page will Refresh back to Browse Page
    Note: Need Error Accounting for all of the above.  

    */


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

// -- Note: This entire function is going to need to be reworked to account for
// Asynchronous Calls to the Database. 
async function sqlQuery(sqlText){
// Connect to the Database
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });
      
      // Perform MySQL operations here...
    dbCall = await connection.promise().query(sqlText, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return;
          }
          console.log("sqlQuery Results:", results);
        });
    // Close Connection When Listening Closes
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection:', err);
            return;
        }
        console.log('MySQL connection closed');
    });
    return dbCall;
};


// Initialize Application to Start listening. 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

