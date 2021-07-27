// Get the string value from page
// Controller Function
function getValue(){
    // ensures the alert is invisible when the page starts
    document.getElementById("alert").classList.add("invisible");

    // set variable equal to the user input
    let userInput = document.getElementById("userInput").value;

    // if user just hits the button, then use the placeholder value
    if (userInput == ""){
        userInput = "racecar";
    }

    // pass input into palindromeCheck function
    let returnObject = palindromeCheck(userInput);

    // pass reversed string to displayResults function
    displayResults(returnObject);
}

// Check original versus the reversed version
// Logic Function
function palindromeCheck(userInput){
    
    // convert to lowercase
    userInput = userInput.toLowerCase();

    // remove spaces and special characters
    let regex = /[^a-z0-9]/gi;

    userInput = userInput.replace(regex,"");

    let reversedInput = [];
    let returnObject = {};

    for (let i = userInput.length -1; i >= 0; i--){
        reversedInput += userInput[i];
    }

    if (reversedInput == userInput){
        returnObject.msg = "Well done! You entered a palindrome!";
    } else {
        returnObject.msg = "Sorry! You did not enter a palindrome!";
    }

    returnObject.reversed = reversedInput;

    return returnObject;
}

// Display the reversed string to page
// View Function
function displayResults(returnObject){

    // show palindrome result based on the test results
        document.getElementById("alertHeading").innerHTML = returnObject.msg;
        document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObject.reversed}`;
        document.getElementById("alert").classList.remove("invisible");
}

// allow button to reset the app
function resetApp(){

    // hide the alert box

    document.getElementById("alert").classList.add("invisible");

    // clear the input box

    document.getElementById("userInput").value = "";
}