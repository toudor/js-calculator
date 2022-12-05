function seven() {
    document.getElementById("sum-text").innerText += "7";
}

function eight() {
    document.getElementById("sum-text").innerText += "8";
}

function nine() {
    document.getElementById("sum-text").innerText += "9";
}

function CE() {
    document.getElementById("sum-text").innerText = "";
}

function four() {
    document.getElementById("sum-text").innerText += "4";
}

function five() {
    document.getElementById("sum-text").innerText += "5";
}

function six() {
    document.getElementById("sum-text").innerText += "6";
}

function divide() {
    str = document.getElementById("sum-text").innerText
    zaza = str.charAt(str.length - 1)
    if (zaza === 'x' || zaza === '*' || zaza === '+' || zaza === '-' || zaza === '/'){
        console.log('fail')
    } else {
        document.getElementById("sum-text").innerText += "/";
    }
}

function one() {
    document.getElementById("sum-text").innerText += "1";
}

function two() {
    document.getElementById("sum-text").innerText += "2";
}

function three() {
    document.getElementById("sum-text").innerText += "3";
}

function multiply() {
    str = document.getElementById("sum-text").innerText
    zaza = str.charAt(str.length - 1)
    if (zaza === '*' || zaza === '.' || zaza === '+' || zaza === '-' || zaza === '/'){
        console.log('fail')
    } else {
        document.getElementById("sum-text").innerText += "*";
    }
}

function zero() {
    document.getElementById("sum-text").innerText += "0";
}

function comma() {
    str = document.getElementById("sum-text").innerText
    zaza = str.charAt(str.length - 1)
    if (zaza === '*' || zaza === '.' || zaza === '+' || zaza === '-' || zaza === '/'){
        console.log('fail')
    } else {
        document.getElementById("sum-text").innerText += ".";
    }
}

function add() {
    str = document.getElementById("sum-text").innerText
    zaza = str.charAt(str.length - 1)
    if (zaza === '*' || zaza === '.' || zaza === '+' || zaza === '-' || zaza === '/'){
        console.log('fail')
    } else {
        document.getElementById("sum-text").innerText += "+";
    }
}

function subtract() {
    str = document.getElementById("sum-text").innerText
    zaza = str.charAt(str.length - 1)
    if (zaza === '*' || zaza === '.' || zaza === '+' || zaza === '-' || zaza === '/'){
        console.log('fail')
    } else {
        document.getElementById("sum-text").innerText += "-";
    }
}

function equals() {
    str = document.getElementById("sum-text").innerText;
    console.log(str);
    result = eval(str);
    console.log(result);
    document.getElementById("sum-text").innerText = result;
}