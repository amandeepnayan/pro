document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const logoutBtn = document.getElementById('logoutBtn');
    const customerIdEl = document.getElementById('customerId');
    const bookingIdEl = document.getElementById('bookingId');
    const bookingDateEl = document.getElementById('bookingDate');
    const deliveryAddressEl = document.getElementById('deliveryAddress');
    const receiverAddressEl = document.getElementById('receiverAddress');
    const amountEl = document.getElementById('amount');
    const statusEl = document.getElementById('status');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Fetch username and display welcome message
    const username = localStorage.getItem('username') || 'User';
    welcomeMessage.textContent = `Welcome, ${username}`;

    const customerId = localStorage.getItem('customerId') || 'N/A';
    customerIdEl.textContent = `Customer ID: ${customerId}`;

    // Fetch individual booking details from localStorage
    const bookingId = localStorage.getItem('bookingId') || 'N/A';
    const bookingDate = localStorage.getItem('pickupDate') || 'N/A'; 
    const deliveryAddress = localStorage.getItem('senderAddress') || 'N/A'; // Use senderAddress
    const receiverAddress = localStorage.getItem('receiverAddress') || 'N/A';
    const amount = localStorage.getItem('calculatedCost') || 'N/A';
    const status = localStorage.getItem('parcelStatus') || 'Pending'; // Set a default status

    // Display booking details
    bookingIdEl.textContent = `Booking ID: ${bookingId}`;
    bookingDateEl.textContent = `Booking Date: ${bookingDate}`;
    deliveryAddressEl.textContent = `Delivery Address: ${deliveryAddress}`;
    receiverAddressEl.textContent = `Receiver Address: ${receiverAddress}`;
    amountEl.textContent = `Amount: ₹${amount}`;
    statusEl.textContent = `Status: ${status}`;

    // Navigation button logic (disabled for now)
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    // Logout functionality
    logoutBtn.addEventListener('click', function () {
        localStorage.clear();
        window.location.href = 'login.html';
    });

    // Console logging for debugging
    console.log("Booking ID:", bookingId);
    console.log("Booking Date:", bookingDate);
    console.log("Delivery Address:", deliveryAddress);
    console.log("Receiver Address:", receiverAddress);
    console.log("Amount:", amount);
    console.log("Status:", status);
});