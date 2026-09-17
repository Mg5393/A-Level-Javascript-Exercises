// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});

// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields
    let numAdults = parseInt(document.getElementById('numAdults').value);
    let numChildren = parseInt(document.getElementById('numChildren').value);
    let numSeniors = parseInt(document.getElementById('numSeniors').value);
    let dayOfWeek = document.getElementById('dayOfWeek').value;
    let timeOfDay = document.getElementById('timeOfDay').value;
    // TODO: Calculate base costs
    let baseCost = (numAdults * 12.00) + (numChildren * 8.00) + (numSeniors * 7.50);
    // Adult: £12.00
    // Child: £8.00
    // Senior: £7.50
    
    // TODO: Apply day of week adjustments
    if (dayOfWeek === 'Friday' || dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
        baseCost += (numAdults + numChildren + numSeniors) * 2.50;
    }
    // Friday-Sunday: +£2.50 per ticket
    
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket
    if (timeOfDay === 'before5pm') {
        baseCost -= (numAdults + numChildren + numSeniors) * 1.50;
    }
    
    // TODO: Calculate subtotal
    
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    // Group booking (6 or more tickets): 15% off
    
    // TODO: Display price breakdown, subtotal, any discounts, and final total
}
