// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    let theory = parseInt(document.getElementById('theory').value);
    let practical = parseInt(document.getElementById('practical').value);
    let result = document.getElementById('result');
    let averageOutput = document.getElementById('average');


    if (theory >= 50 && practical >= 50) {
        let average = (theory + practical) / 2;

        if (average > 70) {
            result.textContent = 'Grade: Distinction';
        } else {
            result.textContent = 'Grade: Pass';
        }

        averageOutput.textContent = 'Average score: ' + average + '%';
    } else {
        result.textContent = 'Grade: Fail';
        averageOutput.textContent = 'Average score: ' + ((theory + practical) / 2) + '%';
    }
}
