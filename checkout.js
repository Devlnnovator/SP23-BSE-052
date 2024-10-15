// Get modal and buttons
const modal = document.getElementById("checkoutModal");
const cartButton = document.getElementById("cartButton");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const submitBtn = document.getElementById("submitBtn");

// Show the modal when the cart button is clicked
cartButton.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Submit the form
document.getElementById("checkoutForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show a success message
    alert("Your order has been received successfully!");

    // Hide the modal
    modal.style.display = "none";

    // Optionally, you can reset the form fields
    document.getElementById("checkoutForm").reset();

    // Show a confirmation popup for 3 seconds
    setTimeout(function() {
        alert("Your order has been received successfully!");
    }, 1000); // Adjust the timing as needed
}
