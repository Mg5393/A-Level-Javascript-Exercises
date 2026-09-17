// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let comp1 = parseInt(document.getElementById('comp1').value);
    let comp2 = parseInt(document.getElementById('comp2').value);
    let comp3 = parseInt(document.getElementById('comp3').value);
    let comp4 = parseInt(document.getElementById('comp4').value);
    // TODO: Calculate the total marks
    let totalM = (comp1 + comp2 + comp3 + comp4)
    // TODO: Calculate the percentage (total possible marks is 400)
    let A2 = ((comp3 + comp4) / 200) * 100
    let totalP =(totalM / 400) * 100 ;{
        document.getElementById('percentage').textContent = "You got " + totalP + "%"
    }
    // TODO: Determine the grade based on the percentage
    if ((A2 >= 90) && (totalP >= 80)){
        document.getElementById('result').textContent = "Grade **A*** ";
    }else if (totalP >= 80){
        document.getElementById('result').textContent = "Grade A";
    } else if (totalP >= 70){
        document.getElementById('result').textContent = "Grade B";
    }else if (totalP >=60){
        document.getElementById('result').textContent = "Grade C";
    }else if (totalP >=50){
        document.getElementById('result').textContent = "Grade D";
    } else if (totalP >= 40){
        document.getElementById('result').textContent = "Grade E";
    }else if (totalP < 40){
        document.getElementById('result').textContent = "Grade U";
    }
    // A: 80% or greater
    // B: 70% or greater
    // C: 60% or greater
    // D: 50% or greater
    // E: 40% or greater
    // U: Less than 40%
    
    // TODO: Display the percentage and grade
}
