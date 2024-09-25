document.getElementById('calculate-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight-kg').value);
    const height = parseFloat(document.getElementById('height-cm').value) / 100;
    const bmiHeight = height * height;
    const bmi = (weight / bmiHeight).toFixed(2);
    
    document.getElementById('bmi-ans').value = bmi;

    document.getElementById('under-weight').style.backgroundColor = '';
    document.getElementById('healthy').style.backgroundColor = '';
    document.getElementById('over-weight').style.backgroundColor = '';
    document.getElementById('obese').style.backgroundColor = '';

    if (bmi < 18.50) {
        document.getElementById('under-weight').style.backgroundColor = '#3333CC';
    } else if (bmi >= 18.50 && bmi <= 24.90) {
        document.getElementById('healthy').style.backgroundColor = 'green';
    } else if (bmi >= 25.00 && bmi <= 29.90) {
        document.getElementById('over-weight').style.backgroundColor = '#CC0066';
    } else if (bmi >= 30.00) {
        document.getElementById('obese').style.backgroundColor = '#FF0000';
    }

    document.getElementById('weight-kg').value = '';
    document.getElementById('height-cm').value = '';
});
