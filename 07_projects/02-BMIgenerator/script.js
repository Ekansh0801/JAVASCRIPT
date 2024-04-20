const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const heightInput = document.querySelector('#height').value;
    const weightInput = document.querySelector('#weight').value;
    const results = document.querySelector('#results');

    // Check if height or weight is not entered or invalid
    if (heightInput === '' || isNaN(heightInput) || heightInput <= 0) {
        results.textContent = `Height ${heightInput} is not valid`;
    } else if (weightInput === '' || isNaN(weightInput) || weightInput <= 0) {
        results.textContent = `Weight ${weightInput} is not valid`;
    } else {
        const height = parseInt(heightInput);
        const weight = parseInt(weightInput);
        const bmi = (weight / (height * height) * 10000).toFixed(2);
        results.textContent = `BMI is ${bmi}`;
    }
});
