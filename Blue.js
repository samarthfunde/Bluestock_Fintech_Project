// Blue.js

function handleVerify() {
    var offerIdValue = document.getElementById("offerId").value;
    var warningTextarea = document.getElementById("warningTextarea");

    // Clear existing warning
    warningTextarea.textContent = "";

    // Check if the offerId is not empty
    if (offerIdValue.trim() !== "") {
        // Simulate server-side validation (replace with actual validation logic)
        var isValidId = validateId(offerIdValue);

        if (isValidId) {
            // Redirect to a page for valid ID 
            warningTextarea.textContent = "";
            window.location.href = "Submit.html";
        } else {
            // Show a warning message for invalid ID
            warningTextarea.textContent = "Invalid input";
            // Set a delay of 3 seconds before redirecting
            setTimeout(function () {
                // Redirect to the Blue HTML page
                window.location.href = "Pro.html";
            }, 3000);
        }
    } else {
        // Show a warning message for empty input
        warningTextarea.textContent = "Please Enter Your ID";
        // Set a delay of 3 seconds before redirecting
        setTimeout(function () {
            // Redirect to the Blue HTML page
            window.location.href = "Pro.html";
        }, 3000);
    }
}

// Function to simulate server-side validation (replace with actual logic)
function validateId(id) {
    // Simulated logic: Assume the ID is valid if it contains at least 8 characters
    return id.length == 8;
}
