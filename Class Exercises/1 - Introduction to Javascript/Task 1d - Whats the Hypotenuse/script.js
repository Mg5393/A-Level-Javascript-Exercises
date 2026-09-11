// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    // TODO:
    // 1. Get the lengths of sides A and B from the input fields
    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);

    // 2. Calculate the hypotenuse using the Pythagorean theorem: c = √(a² + b²)
    let hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);

    // 3. Display the result in the hypotenuse span element
    document.getElementById('hypotenuse').textContent = hypotenuse;
    // Note: Use Math.sqrt() for square root
    
}
