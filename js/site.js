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

    // pass input into reverseString function
    let reversedInput = reverseInput(userInput);

    // pass reversedInput into our palindrome checker
    let palindromeTestResult = palindromeCheck(userInput, reversedInput);

    // pass reversed string to displayResults function
    displayResults(userInput, reversedInput, palindromeTestResult);
}

// Reverse the string
// Logic Function
function reverseInput(userInput){
    let reversedInput = [];

    // use a for loop to reverse the string
    for (let index = userInput.length - 1; index >= 0; index--) {
        reversedInput += userInput[index];
    }

    // return the reversedString array to getValue function
    return reversedInput;
}

// Check original versus the reversed version
// Logic Function
function palindromeCheck(userInput, reversedInput){
    let palindromeTestResult = "False";

    if (userInput == reversedInput){
        palindromeTestResult = "True";
    }

    return palindromeTestResult;
}

// Display the reversed string to page
// View Function
function displayResults(userInput, reversedInput, palindromeTestResult){

    // show palindrome result based on the test results
    if (palindromeTestResult == "True"){
        document.getElementById("alertHeading").innerHTML = "Success! This is a palindrome!";
    } else {
        document.getElementById("alertHeading").innerHTML = "I'm sorry! This is not a palindrome.";
    }

    // write the message to the page

    document.getElementById("message").innerHTML = `The original input is: ${userInput}</p><p>The reversed input is: ${reversedInput}`;

    // show the alert box

    document.getElementById("alert").classList.remove("invisible");
}

// allow button to reset the app
function resetApp(){

    // hide the alert box

    document.getElementById("alert").classList.add("invisible");

    // clear the input box

    document.getElementById("userInput").value = "";
}