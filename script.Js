function greetUser() {
    // The password you want to use
    const correctPassword = "myPassword123";

    // Prompt the user to enter the password
    const enteredPassword = prompt("Please enter the password:");

    // Check if the entered password is correct
    if (enteredPassword === correctPassword) {
        alert("that is Correct you solved this websites so secure website, I suppose this password isnt so super or secret now HaHa!");
    } else {
        alert("Incorrect password. Access denied.");
    }

    document.getElementById("redirectButton").addEventListener("click", function() {
        window.location.href = "Page1.html"; 
      });
}
