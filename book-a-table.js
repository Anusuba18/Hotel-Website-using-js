document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        let valid = true;
        const name = document.getElementById('name').value;
        if (name.length < 6) {
            alert("Name must be at least 6 letters long.");
            valid = false;
        }
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        const phone = document.getElementById('phone').value;
        const phonePattern = /^\d{10,}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be at least 10 digits long.");
            valid = false;
        }
        const time = document.getElementById('time').value;
        if (!time) {
            alert("Please choose a valid time.");
            valid = false;
        }
        const people = document.getElementById('people').value;
        if (people < 1) {
            alert("Number of people must be at least 1.");
            valid = false;
        }
        if (valid) {
            setTimeout(() => {
                window.location.href = 'home.html'; 
            }, 1000); 
        }
    });
});
