document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  form.addEventListener('submit', function(event) {
      let valid = true;

      // Reset previous error messages
      nameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';

      // Validate Name
      if (nameInput.value.trim() === '') {
          nameError.textContent = 'Name is required';
          valid = false;
      }

      // Validate Email
      if (!isValidEmail(emailInput.value)) {
          emailError.textContent = 'Invalid email address';
          valid = false;
      }

      // Validate Password
      if (passwordInput.value.length < 6) {
          passwordError.textContent = 'Password must be at least 6 characters';
          valid = false;
      }

      if (!valid) {
          event.preventDefault(); // Prevent form submission if validation fails
      }
  });

  function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
});
