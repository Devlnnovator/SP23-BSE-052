// Personal information to be displayed when the image is hovered
const personalInfo = {
    name: "Eman Fatime",
    phone: "+1 (123) 456-7890",
    email: "SP23-BSE-052@cuilahore.edu.pk",
    address: "123 Main St, Lahore, Pakistan"
};

// Get the image and the personal info container
const profileImage = document.querySelector('.profile-image img');
const personalInfoContainer = document.getElementById('personal-info-container');

// Function to display personal information on hover
profileImage.addEventListener('mouseover', function() {
    personalInfoContainer.innerHTML = `
        <strong>Name:</strong> ${personalInfo.name} <br>
        <strong>Phone:</strong> ${personalInfo.phone} <br>
        <strong>Email:</strong> ${personalInfo.email} <br>
        <strong>Address:</strong> ${personalInfo.address}
    `;
    personalInfoContainer.style.display = 'block';
});

// Function to hide personal information when not hovering
profileImage.addEventListener('mouseout', function() {
    personalInfoContainer.style.display = 'none';
});
