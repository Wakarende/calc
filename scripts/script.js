const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calckeys');
const ansDisplay = document.querySelector('.screen')

keys.addEventListener('click',e=>{
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = ansDisplay.keyContent;
        if (!action) {
            if (displayedNumber === '0') {
                ansDisplay.textContent = keyContent;
            }else{
                ansDisplay.textContent = displayedNumber+keyContent;
            }
        }
        if (action === 'subtract' || action === 'equals' || action=== 'add' || action === 'multiply' || action=== 'divide' || action === 'equals') {
            console.log("Math function");
        }
    }
})