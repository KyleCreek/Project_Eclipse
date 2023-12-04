/*
const mysql = require('mysql2');

// Replace the following with your MySQL connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.7',
  database: 'TESTUSERS',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Perform MySQL operations here...
connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return;
    }
    console.log('Query results:', results);
  });
// Close the MySQL connection when done
connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
    return;
  }
  console.log('MySQL connection closed');
});
*/
// Test Purposes -- Define the Wager Object and Create Wagers
class wager {
  // EQC Bet Slip Information
  // Description
  // Odds
  // Ticket Cost
  // To Win
  // To Collect
  constructor(owner, description, odds, ticketCost){
      // ID Should be Unique and generated
      this.id = this.generateId();
      this.owner = owner;
      this.description = description;
      this.ticketCost = ticketCost;
      this.odds = odds;
      this.winnings = this.calculateWinnings(this.ticketCost, this.odds);
  }
  // Method Generates a Custom ID for the Wager.
  generateId(){
    // Going to need a way to Make this Unique. 
    return Math.floor(Math.random() * 100);
  }
  // Method Calculates the Winnings of the second party;
  calculateWinnings(ticketCost, odds){
    // Favorite
    if (odds > 0){
      //Potential profit = Wager / (Odds/100)
      return ticketCost / (odds/100);
    // Under Dog
    } else{
      //Potential profit = Wager x (Odds/100)
      return ticketCost * (odds/100);
    }
  }
}
// Create a bunch of Random Bets
const bet1 = new wager('kyle', 'This is what the bet is goign to be', -175, 67);


// Function is meant to Display a Wager on the screen
function viewWager(wagerObject){
  // Hook for the Wager Display Area
  const displayDiv = document.getElementById('wager-details');
  // Clear the Existing Wager In the Document
  while (displayDiv.firstChild){
    displayDiv.removeChild(displayDiv.firstChild);
}

  // Build the information to be Displayed to the user. 
  const wagerDiv = document.createElement('div');
  const wagerList = document.createElement('ul');

  const line1 = `Description: ${wagerObject['description']}`;
  const line2 = `Odds: ${wagerObject['odds']}`;
  const line3 = `Cost: ${wagerObject['ticketCost']}`;
  const line4 = `To Win: ${wagerObject['winnings']}`;
  // Add the Information to the Div
  const l1 = document.createElement('li')
  l1.innerText = line1;
  wagerDiv.append(l1);

  const l2 = document.createElement('li')
  l2.innerText = line2;
  wagerDiv.append(l2);

  const l3 = document.createElement('li')
  l3.innerText = line3;
  wagerDiv.append(l3);

  const l4 = document.createElement('li')
  l4.innerText = line4;
  wagerDiv.append(l4);

  // Append Objects to DOM
  wagerDiv.append(wagerList);
  displayDiv.append(wagerDiv);

}

viewWager(bet1);