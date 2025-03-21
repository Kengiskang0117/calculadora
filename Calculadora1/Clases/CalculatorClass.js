export default class Calculator {
    constructor(operand1Element, operand2Element, operand3Element) {
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.operand3Element = operand3Element;
        this.clear();
    }

    clear() {
        this.operand1 = "";
        this.operand2 = 0;
        this.operand3Element.innerHTML = '';
        this.operator = '';
        this.updateUI();
    }

    updateUI() {
        this.operand1Element.innerHTML = `${this.operand1} ${this.operator} ${this.operand2}`;
        this.operand2Element.innerHTML = "";
    }

    appendNumber(number) {
        if (number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 == 0 ? number : this.operand2.toString() + number;
        this.operand2Element.innerHTML = this.operand2;
        
        this.updateUI();
    }

    delete() {
        this.operand2 = this.operand2.toString().slice(0, -1);
        if (this.operand2 === "") this.operand2 = "0";
        this.updateUI();
    }

    operation(operator) {
        if (this.operator) {
            this.Calc();
        }
        this.operator = operator;
        this.operand1 = this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = "";
        this.updateUI();
    }

    Calc() {
        console.log("operand1 despues", this.operand1);
        console.log("operand2 despues", this.operand2);
        console.log("operator", this.operator);

        let num1 = parseFloat(this.operand1);
        let num2 = parseFloat(this.operand2);
        let operation = "";
        let result = 0;

        switch (this.operator) {
            case "+":
                result = num1 + num2;
                operation = `${num1}+${num2} = ${result}`;
                break;
            case "-":
                result = num1 - num2;
                operation = `${num1}-${num2} = ${result}`;
                break;
            case "*":
                result = num1 * num2;
                operation = `${num1} * ${num2} = ${result}`;
                break;
            case "%":
                result = num1 * num2 / 100;
                operation = `${num1} % ${num2} = ${result}`;
                break;
            case "/":
                result = num1 / num2;
                operation = `${num1} / ${num2} = ${result}`;
                break;
        }

        this.operator = "";
        this.operand2 = result;
        this.operand3Element.innerHTML = operation;
        this.operand1 = " ";
        this.updateUI();
    }
}