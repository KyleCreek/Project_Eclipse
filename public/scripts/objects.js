
// Note; Need to Differentiate between a New user and a Existing User.
// New User will need to have ID Generated, and Be Added to the Database.
// Existing User will NOT need those Functions Generated. 
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
/*
Represents a wager that can be made by an individual
-- Note: Initial Product Offering will only Allow for ONE to One Ratio for bettors and
bets to simplify development. 
*/

// Test Purposes -- Define the Wager Object and Create Wagers
class wager {
  // EQC Bet Slip Information
  // Description
  // Odds
  // Ticket Cost
  // To Win
  // To Collect
  // Chose not to incorporate the Additional Stuff because I want 
  // To amek a simple, straightforward App. Then Add On
  constructor(owner, description, ticketCost){
      // ID Should be Unique and generated
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

  module.exports = wager;