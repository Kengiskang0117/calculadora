 export default class  Calculator {
    constructor (operand1Element, operand2Element,operand3Element){
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.operand3Element = operand3Element;
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
        this.operand1 = this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = 0;
        this.updateUI();
    }
    Calc(){

        console.log("operand1 despues", this.operand1);
        console.log("operand2 despues", this.operand2);
        console.log("operator", this.operator);

        let num1 = parseFloat(this.operand1);
        let num2 = parseFloat(this.operand2);
        var operation = "";


        switch(this.operator){
            case "+":
                this.operand2 = num1 + num2;
               operation= `${num1}+${num2}`;
               
                break;
            case "-":
                this.operand2 = num1 - num2;
                operation= `${num1}-${num2}`
                break;
            case "*":
                this.operand2 = num1 * num2;
                 operation= `${num1} * ${num2}`
                break;
            case "%":  
                this.operand2 = num1 * num2 /100 ;
                 operation= `${num1} % ${num2}`
                break;
            case "/":
                this.operand2 = num1 / num2;
                 operation= `${num1} / ${num2}`
                break;
        }
        this.operator= "";

        this.operand3Element.innerHTML = operation;
        this.operand1 = "";
       
        this.updateUI();
    }
}
