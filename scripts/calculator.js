const display = document.getElementsByClassName('calculator__display')[0];
const calculator = document.getElementsByClassName('calculator')[0];
const keys = calculator.getElementsByClassName('calculator__keys')[0];

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType
   if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
         display.textContent = keyContent
      } else {
         display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previousKeyType = 'number'
   } 
   if (action === 'clear') {
      if (key.textContent === 'AC') {
        calculator.dataset.firstValue = ''
        calculator.dataset.modValue = ''
        calculator.dataset.operator = ''
        calculator.dataset.previousKeyType = ''
      } else {
        key.textContent = 'AC'
      }
      
      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear'
    } else {
      const clearButton = calculator.querySelector('[data-action=clear]')
      clearButton.textContent = 'CE'
    }
   if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
      
    }
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
      calculator.dataset.previousKeyType = 'decimal'
    }
    
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      calculator.dataset.previousKeyType = 'calculate'
  
      display.textContent = calculate(firstValue, operator, secondValue)
    }

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
 } 
})

const calculate = (n1, operator, n2) => {
   const firstNum = parseFloat(n1)
   const secondNum = parseFloat(n2)
   if (operator === 'add') return firstNum + secondNum
   if (operator === 'subtract') return firstNum - secondNum
   if (operator === 'multiply') return firstNum * secondNum
   if (operator === 'divide') return firstNum / secondNum
 }