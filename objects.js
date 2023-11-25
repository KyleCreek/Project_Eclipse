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
        this.activeBets = [];
        this.historicalBets = [];
        this.funds = 0;
    }

    generateUserId(){
        // Function will Generate a Unique User ID that will be stored in a database.
        // All User IDs MUST be unique
    }

    saveUser(){
        // This Function Will Commit the Customer to the Database
    }

    makeBet(){
        // This function will allow the user to make a bet. 
    }
}

class bet {
    constructor(description, firstBettor, secondBettor, odds, stakes, maxBettors){
        this.description = description;
        this.firstBettor = firstBettor;
        this.secondBettor = secondBettor;
        this.odds = odds;
        this.stakes = stakes;
        this.maxBettors = maxBettors
    }

    generateBetId(){
        // Function will generate a Unique User Id that will be stored in a database.
        // All Bet IDs MUST be Unique. 
    }
}

export { user, bet};