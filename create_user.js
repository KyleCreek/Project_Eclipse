form = document.getElementById("create-user-form");

form.addEventListener("click", (e) => {
    const fName = document.getElementById('first-name');
    const lName = document.getElementById('last-name');
    const bDate = document.getElementById('birth-date');
    const email = document.getElementById('email');
    const userName = document.getElementById('user-name');
    const password = document.getElementById('password');

    // Need valiadtion to ensure that user Name isn't already taken
    // validateUserName(userName);
    
    const newUser = new user(fName, lName, bDate, email, userName, password);

});

function validateUserName(userNameInput){
    console.log('validating user name');
}