// ! Create a simple prompt calculator
let para = document.getElementsByTagName("p")[0];
para.style.fontSize = "40px";
para.style.fontWeight = "600";
let  num1 = Number(prompt("Enter a number"))
if(isNaN(num1)) {
    num1 = 0;
}
let num2 = Number(prompt("Enter another number"));
if(isNaN(num2)) {
    num2 = 0;
}
let operation;
let operator =["+","-","*","/","%","**"]
do{
    operation =prompt("Enter a operation(like + , - , * , / , % , **)");
}while(!(operator.includes(operation)))
switch(operation){
    case "+":
        para.innerHTML=`The summation is =  ${num1 + num2}`;
        break;
    case "-":
        para.innerHTML=`The subtraction is =  ${num1 - num2}`;
        break;
    case "*":
        para.innerHTML=`The multiplication is =  ${num1 * num2}`;
        break;
    case "/":
        para.innerHTML=`The division is =  ${num1 / num2}`;
        break;
    case "%":
        para.innerHTML=`The remainder is =  ${num1 % num2}`;
        break;
    case "**":
        para.innerHTML=`The exponentiation is =  ${num1 ** num2}`;
        break;
}