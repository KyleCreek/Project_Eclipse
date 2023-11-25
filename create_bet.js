form = document.getElementById("create-bet-form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Need a way to Obtain the User Submitting the Information

    // Obtain the Information From the Form on submission
    const description = document.getElementById('bet-description').value;
    const odds = document.getElementById('odds').value;
    const stakes = document.getElementById('stakes').value;
    const maxBettors = document.getElementById('max-bettors').value;

    // Create a Bet Object
    const newBet = new bet(description, "test", "n/a", odds, stakes, maxBettors)

    // Commit the New Bet to the Database
    debugger;


    console.log("Submission");
});