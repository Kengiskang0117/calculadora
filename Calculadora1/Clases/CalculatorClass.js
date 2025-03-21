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
        this.operand3Element.innerHTML = '';
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

        let num1 = parseFloat(this.operand1); // El valor de num1 va ser igual al resultado de "PARSEFLOAT" el cual es una 
                                                // funcion que, me convierte el valor de OPERAND1 a FLOAT
        let num2 = parseFloat(this.operand2);
        var operation = "";  // Es un STRING y esta vacia porque 


        switch(this.operator){
            case "+":
                this.operand2 = num1 + num2;
               operation= `${num1}+${num2}`; // concatenamos(coge el valor de un valor externo y lo unimos al valor que queremos representar) 
               // el resultado en un string 
               //  donde la suma del num1 + num2 nos estaria
                //nos estaria dando el resultado deseado
               
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
