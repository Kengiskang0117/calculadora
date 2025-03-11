 export default class  Calculator {
    constructor (operand1Element, operand2Element){
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.clear();

    }

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
        
       
    }

    updateUI(){
        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = this.operand2;

    }

    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 == 0 ? number: this.operand2.toString()+number;
        this.updateUI();
    }

    delete() {
        this.operand2 = this.operand2.toString().slice(0, -1);
        if (this.operand2 === "") this.operand2 = "0";
        this.updateUI();
    }


    operation(operator){
        if(this.operator){
            this.Calc();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = 0;
        this.updateUI();
    }
    Calc(){
        switch(this.operator){
            case "+":
                var result = this.operand1 = +this.operand1 + +this.operand2;
                return console.log(result)
            break;
            case "-":
            this.operand1 = +this.operand1 - +this.operand2;
            break;
        case "*":
            this.operand1 = +this.operand1 * +this.operand2;
            break;
        case "/":
            this.operand1 = +this.operand1 / +this.operand2;
            break;
        }
        this.operand1 = " ";
        this.operand2 = 0;
        this.updateUI();
    }
}
