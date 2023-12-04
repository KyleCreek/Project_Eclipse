// Function is meant to Display a Wager on the screen
// Function is intended to be used with "browse.html"
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
  