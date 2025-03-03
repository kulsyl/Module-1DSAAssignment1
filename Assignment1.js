
let num1=prompt("Enter the first number:");
let operator=prompt("Enter the operator('+' or '-' or '*' or '/' or '%'):");
let num2=prompt("Enter the secound number:");

num1=parseInt(num1);
num2=parseInt(num2);

if (isNaN(num1) || isNaN(num2)){
    console.log("Please enter a valid number");
   
}
else {
    if(operator==="+"){
        let sum=num1+num2;
        console .log(sum);
    }
    else if(operator==="-"){
        let Sub=num1-num2;
        console .log(Sub);
    }
    else if(operator==="*"){
        let Mul=num1*num2;
        console .log(Mul);
    }
    else if(operator==="/"){
        let Div=num1/num2;
        console .log(Div);
    }
    else if(operator==="%"){
        let mod=num1%num2;
        console .log(mod);
    }
}


