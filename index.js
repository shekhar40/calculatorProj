let numberButtons =document.getElementById("button")
let currenInput = ''
let displayNumber = document.getElementById("displays")




function appendNumber(number)
{
    currenInput += number
   displayNumber.value = currenInput
   
}

function calculate() {

    try {
        currenInput = eval(currenInput).toString();
        displayNumber.value = currenInput;
    } catch (e) {
        displayNumber.value = 'Error';
        currenInput = '';  // Clear input on error
    }
     

}

function appendOperator(operator)
{
    currenInput += '' + operator  + ''
    displayNumber.value = currenInput
}

function clearDisplay()
{   currenInput=''
    displayNumber.value = currenInput
}