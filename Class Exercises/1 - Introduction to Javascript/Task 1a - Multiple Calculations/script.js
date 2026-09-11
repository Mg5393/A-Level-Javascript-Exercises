// Function to perform the multiple calculations
function calculate() {
    let num1 = parseFloat(document.getElementById('numberA').value);
    let num2 = parseFloat(document.getElementById('numberB').value);
    let num3 = parseFloat(document.getElementById('numberC').value);

    // validate and complete sum
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('average').textContent = 'Please enter valid numbers!';
        document.getElementById('product').textContent = 'Please enter valid numbers!';
        document.getElementById('expression').textContent = 'Please enter valid numbers!';
    } else {
        const average = Math.round((num1 + num2 + num3) / 3);
        const product = num1 * num2 * num3;
        const expression = num1 + (num2 * num3);
        const averageoutput = document.getElementById('average');
        const averagevalue = `${num1} + ${num2} + ${num3} /3 = ${average}`;

        averageoutput.textContent = averagevalue;
        document.getElementById('product').textContent = `${num1} * ${num2} * ${num3} = ${product}`;
        document.getElementById('expression').textContent = `${num1} +(${num2}*${num3}) = ${expression}`;
    }
}

// Event listener for the button click
document.getElementById('calculateBtn').addEventListener('click', calculate);
