// Note; Need to Differentiate between a New user and a Existing User.
// New User will need to have ID Generated, and Be Added to the Database.
// Existing User will NOT need those Functions Generated. 
class user {
    constructor(firstName, lastName, birthDate, email, userName, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.userID = generateUserID();
        this.saveUser();
        // Need A Field for what Will Ultimately be Payment Information
        // The Payment information might ned to be it's own object. 
    }

    generateUserId(){
        // Function will Generate a Unique User ID that will be stored in a database.
        // All User IDs MUST be unique
    }

    saveUser(){
        // This Function Will Commit the Customer to the Database
    }

}
/*
Represents a wager that can be made by an individual
-- Note: Initial Product Offering will only Allow for ONE to One Ratio for bettors and
bets to simplify development. 
*/
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