let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('result').value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
