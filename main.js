let line = '';
let lineMem = '';
let p1 = '';
let p2 = '';
let oper = '';

const insertInLine = (num) => {
    console.log(num);
    console.log(line);
    console.log(limitStr(line));
    // if(limitStr(line)){
    //     line += num;
    //     document.getElementById("inOutLine").innerHTML = line;
    // }
    line += num;
    document.getElementById("inOutLine").innerHTML = line;
}

const cliner = () => {
    lineMem = '';
    line = '';
    document.getElementById("memoryLine").innerHTML = '';
    document.getElementById("inOutLine").innerHTML = '';
};

const clinerIn = () => {
    line = '';
    document.getElementById("inOutLine").innerHTML = '';
};

const operation = (numberOne, operChar) => {
    p1 = numberOne;
    oper = operChar;
    if (oper === 'xª') {
        oper = oper.substring(2,1);
    }
    lineMem = `${p1}${oper}`;
    line = '';
    document.getElementById("memoryLine").innerHTML = lineMem;
    document.getElementById("inOutLine").innerHTML = '';
    console.log(oper);
    if (oper === '√'){
        decision(p1);
    }
    
}

const decision = (numberTwo) => {
    p1 = Number(p1);
    p2 = Number(numberTwo);
    console.log('numberTwo', numberTwo);
    console.log('p1', p1);
    console.log('p2', p2);
    lineMem = '';
    if (oper === '+'){
        result = p1 + p2;
        changeBackground(result);
    }
    if (oper === '-'){
        result = p1 - p2;
        changeBackground(result);
    }
    if (oper === '*'){
        result = p1 * p2;
        changeBackground(result);
    }
    if (oper === '/'){
        result = p1 / p2;
        changeBackground(result);
    }
    if (oper === 'ª'){
        result = p1 ** p2;
        changeBackground(result);
    }
    if (oper === '√'){
        result = Math.sqrt(p1);
        document.getElementById("memoryLine").innerHTML = '';
        document.getElementById("inOutLine").innerHTML = String(result).substr(0,11);
        changeBackground(result);
        letReset();
    }
    document.getElementById("memoryLine").innerHTML = '';
    document.getElementById("inOutLine").innerHTML = String(result).substr(0,44);
    letReset();
}

const letReset = () => {
    line = '';
    lineMem = '';
    p1 = '';
    p2 = '';
    oper = '';
}

const limitStr = (str) => str.length <= 44;

const parsLineIn = () => {
    return document.getElementById('inOutLine').innerHTML;
}

const changeBackground = (result = 0) => {
    if (result === 0){
        color = 'linear-gradient(1deg, #E9CFBA, #C5DDE8)';
    }
    if (result > 0){
        color = 'linear-gradient(1deg, #e67460, #a2e6f5)';
    }
    if (result < 0){
        color = 'linear-gradient(1deg, #3080db, #83c5c0)';
    }
    document.body.style.transition = 'background 2s  ease-in-out';
    document.body.style.background = color;
 }