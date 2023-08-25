document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const submittedData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert(submittedData);

        // Clear form fields after submission
        contactForm.reset();
    });
});
