document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => { 
            if (button.textContent === '=') {
                try { "=" 
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error'; 
                }
            } else if (button.textContent === 'C') {
                display.value = ''; 
            } else if (button.textContent === '←') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += button.textContent;
            }
        });
    });
});
