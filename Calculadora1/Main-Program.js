import Calculator from "./Clases/CalculatorClass.js";

document.addEventListener("DOMContentLoaded", () => {
    const operand1Element = document.querySelector("[data-operand-1]");
    const operand2Element = document.querySelector("[data-operand-2]");
    const operand3Element = document.querySelector("[data-operand-3]");
    const clearButton = document.querySelector("[data-clear]");
    const numberbuttons = document.querySelectorAll("[data-number]");
    const deletebutton = document.querySelector("[data-delete]");
    const operationbuttons = document.querySelectorAll("[data-operation]");
    const equalsbutton = document.querySelector("[data-equals]");

    const calculator = new Calculator(operand1Element, operand2Element, operand3Element);

    clearButton.addEventListener("click", () => {
        calculator.clear();
    })

    numberbuttons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerHTML);
        });
    });

    deletebutton.addEventListener('click', () => {
        calculator.delete();
    });

    operationbuttons.forEach(button => {
        button.addEventListener("click", () => {
            calculator.operation(button.innerHTML);
        });
    });

    equalsbutton.addEventListener("click", () => {
        calculator.Calc();
    });
});


