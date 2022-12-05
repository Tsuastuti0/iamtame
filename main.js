var textView = document.getElementById('textView');
let number1 ;
let number2 ;
let number = [];
let fixNumber = [];
let symbolArr = [];

function insert(value){
    number.push (value);
    fixNumber = parseInt(number.join(''));
    textView.value = fixNumber;
    console.log(value);
}

function symbol(value){
    if(value !== '='){
        symbolArr.push(value);
        number = []
        number1 = fixNumber;
        textView.value = symbolArr[0];
    }else{
        number = [];
        number1 = fixNumber;
        resultCalculator();
    }
}

function resultCalculator(){
    if(symbolArr[0] === '+'){
        var result = number1 + number2;
        
    }else if (symbolArr[0] === '*'){
        var result = number1 * number2;
    }else if (symbolArr[0] === '/'){
        var result = number1 / number2;
    }else if (symbolArr[0] === '-'){
        var result = number1 - number2;
    }else if (symbolArr[0] === '+'){
        var result = number1 + number2;
    console.log(value);
}
resultCalculator.value=eval(resultCalculator);
console.log(value);
}

function clean(){
    textView.value="";
}

