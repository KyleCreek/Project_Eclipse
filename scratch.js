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