document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const itemsContainer = document.getElementById('itemsContainer');
    const addItemButton = document.getElementById('addItemButton');
    const totalBillDiv = document.getElementById('totalBill');

    let itemCount = 1;

    // Add new item fields
    addItemButton.addEventListener('click', function() {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.className = 'item-container';
        newItem.innerHTML = `
            <label for="food${itemCount}">Food Item:</label>
            <input type="text" id="food${itemCount}" name="food${itemCount}" placeholder="Food item e.g., Idli" required>
            <label for="quantity${itemCount}">Quantity:</label>
            <input type="number" id="quantity${itemCount}" name="quantity${itemCount}" min="1" required>
        `;
        itemsContainer.appendChild(newItem);
    });

    // Update total bill
    function updateTotalBill() {
        let total = 0;
        for (let i = 1; i <= itemCount; i++) {
            const foodItem = document.getElementById(`food${i}`);
            const quantity = document.getElementById(`quantity${i}`);
            if (foodItem && quantity) {
                const price = getPrice(foodItem.value); // Function to get price based on food item
                total += price * (parseInt(quantity.value) || 0);
            }
        }
        totalBillDiv.textContent = `Total Bill: $${total.toFixed(2)}`;
    }

    function getPrice(foodItem) {
        const prices = {
            'idli': 5.00,
            'dosa': 7.00,
            'chapati': 3.00,
            'biryani': 10.00,
            'sushi': 12.00,
            'milkshake': 6.00,
            'juice': 4.00,
            'salad': 5.50,
            'poori': 4.50,
            'sandwich': 6.50,
            'pasta': 8.00,
            'fried rice': 7.50,
            'pulov': 9.00,
            'chicken soup': 8.50,
            'chicken lollipop': 11.00,
            'shrimp curry': 13.00,
            'pizza': 14.00,
            'ramen noodles': 9.50,
            'fish curry': 12.50,
            'hamburger': 7.00
        };
        return prices[foodItem.toLowerCase()] || 0;
    }

    form.addEventListener('input', updateTotalBill);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const orderDetails = document.getElementById('orderDetails').value;

        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Name should only contain alphabetic characters.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Phone number must be 10 digits.');
            return;
        }

        if (orderDetails.trim() === '') {
            alert('Please provide order details.');
            return;
        }

        alert('Order submitted successfully!');
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 2000);
    });
});