// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    let num1 = parseFloat(document.getElementById('numberA').value);
    let num2 = parseFloat(document.getElementById('numberB').value);
    let num3 = parseFloat(document.getElementById('numberC').value);
    //validate and complete sum
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById()
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    // 2. Calculate:
    //    - (A + B + C) / 3
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements
}
