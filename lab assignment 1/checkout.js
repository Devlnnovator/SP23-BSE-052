// Get modal and buttons
const modal = document.getElementById("checkoutModal");
const cartButton = document.getElementById("cartButton");
const closeBtn = document.getElementById("closeModal");

// Show the modal when the cart button is clicked
cartButton.onclick = function() {
    modal.style.display = "flex"; // Use flex to center the modal
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
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

    // Reset the form fields
    this.reset();
}
