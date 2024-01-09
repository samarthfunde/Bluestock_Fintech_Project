

function handleVerify() {
    // Get the input value and warning textarea element
    var offerIdValue = document.getElementById("offerId").value;
    var warningTextarea = document.getElementById("warningTextarea");

    // Check if the offerId is not empty
    if (offerIdValue.trim() !== "") {
        // Simulate server-side validation (replace with actual validation logic)
        var isValidId = validateId(offerIdValue);

        if (isValidId) {
            // Reset the warning textarea if the input is valid
            warningTextarea.value = "";
            // Redirect to a page for valid ID
            window.location.href = "Submit.html";
        } else {
            // Show a warning message in the textarea for invalid ID
            warningTextarea.value = "Invalid input";
            
            // Set a delay of 3 seconds before redirecting
            setTimeout(function () {
                // Redirect to the Blue HTML page
                window.location.href = "Blue.html";
            }, 3000);
        }
    } else {
        // Show a return message below the textarea for empty input
        warningTextarea.value = "Please Enter Your ID";
        setTimeout(function () {
            // Redirect to the Blue HTML page
            window.location.href = "Blue.html";
        }, 3000);
    }
}

// Function to simulate server-side validation (replace with actual logic)
function validateId(id) {
    // Simulated logic: Assume the ID is valid if it contains at least 8 characters
    return id.length >= 8;
}


Blue.js
