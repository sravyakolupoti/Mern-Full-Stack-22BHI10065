// Save form data to localStorage
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const contact = document.getElementById('contact').value;
      const address = document.getElementById('address').value;

      const user = { name, email, contact, address };

      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      alert('User registered successfully!');
      form.reset();
    });
  }

  // Populate table on view.html
  const tableBody = document.querySelector('#usersTable tbody');
  if (tableBody) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.contact}</td>
        <td>${user.address}</td>
      `;
    });
  }
});