// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // Get values from input fields
    let age = parseInt(document.getElementById('age').value);
    let noClaims = parseInt(document.getElementById('noClaims').value);
    let previousClaims = parseInt(document.getElementById('previousClaims').value);

    // Calculate base premium (£500)
    let basePremium = 500;

    // Apply age adjustment
    if (age < 25) {
        basePremium = basePremium * 1.5; // +50%
    } else if (age > 40) {
        basePremium = basePremium * 0.85; // -15%
    }

    // Apply no claims bonus
    if (noClaims === 0) {
        basePremium = basePremium * 1; // No discount
    } else if (noClaims >= 1 && noClaims <= 2) {
        basePremium = basePremium * 0.9; // 10% discount
    } else if (noClaims >= 3 && noClaims <= 5) {
        basePremium = basePremium * 0.75; // 25% discount
    } else if (noClaims > 5) {
        basePremium = basePremium * 0.65; // 35% discount
    }

    // Add previous claims adjustment
    if (previousClaims > 0) {
        basePremium = basePremium * (1 + previousClaims * 0.2); // Each claim adds 20%
    }

    // Display final premium
    document.getElementById('breakdownSection').textContent = 'Base premium: £500.00';
    document.getElementById('result').textContent = 'Final premium: £' + basePremium.toFixed(2);
}
