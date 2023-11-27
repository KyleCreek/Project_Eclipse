reject = document.getElementById('reject');
accept = document.getElementById('accept');
// Note To Self: Do I need to get the 

// Add the Event Listeners
reject.addEventListener('click', (e) =>{
    console.log('reject');
})

accept.addEventListener('click', (e) =>{
    console.log('accept');
})

function initialLoad(){
    // Call to the Database obtain Bet Details
    // Note 1: Either need to make sure to do it here, or elsewhere
    // Note 2: Need to mak an Asynchronous call and ensre the data comes back before loaded. 

    // Parse the database return

    // Load the Database information into the HTML. 
}

initialLoad();


