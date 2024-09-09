document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;

    const li = document.createElement('li');
    li.textContent = `${name} - ${phonenumber}`;

    document.getElementById('contactList').appendChild(li);

    document.getElementById('contactForm').reset();
});


