/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var emailInput = document.getElementById("email");
    var messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = emailInput.value.trim();

        if (email === "") {
            showMessage("Please enter a valid email address.");
        } else {
            showMessage("Thank you! Your email address " + email + " has been added to our mailing list!");
        }
    });

    function showMessage(message) {
        messageDiv.textContent = message;
    }
});
