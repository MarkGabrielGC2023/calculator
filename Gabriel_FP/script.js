function appendToDisplay(value) {
    document.getElementById('screen').value += value;
}

function clearDisplay() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    const currentDisplay = document.getElementById('screen').value;
    document.getElementById('screen').value = currentDisplay.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById('screen').value;
    try {
        const result = eval(expression);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}