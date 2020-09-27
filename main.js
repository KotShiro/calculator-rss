let line = '', lineMem = '',p1 = '',p2 = '',oper = '';

const insertInLine = (num) => {
    if(limitStr(line) && pointCheck(line, num) && zeroCheck(line, num) && zeroCheckOne(line, num) ){
        line += num;
        document.getElementById("inOutLine").innerHTML = line;
    }
}

const cliner = () => {
    lineMem = '', line = '', p1 = '', p2 = '';
    document.getElementById("memoryLine").innerHTML = '';
    document.getElementById("inOutLine").innerHTML = '';
};

const clinerIn = () => {
    line = '';
    document.getElementById("inOutLine").innerHTML = '';
};

const operation = (numberOne, operChar) => {
    if (oper !== '' && oper !== operChar && oper !== '√') {
        oper = operChar;
        if (document.getElementById("inOutLine").innerHTML !== ''){
         line = '';
         document.getElementById("inOutLine").innerHTML = '';   
        }
        if (operChar === 'xª') {
            oper = operChar.substring(2,1);
        }
        document.getElementById("memoryLine").innerHTML = `${p1}${oper}`;
        document.getElementById("inOutLine").innerHTML = '';
    }
    else {
        if (lineMem !== '') {
            p1 = document.getElementById("memoryLine").innerHTML;
            p1 = p1.substring(0,p1.length - 1)
            oper = operChar;
            if (operChar === 'xª') {
                oper = operChar.substring(2,1);
            }
            decision(numberOne, operChar);
        }
        else {
            if (operChar === '-' && numberOne === '' && document.getElementById("inOutLine").innerHTML === '') {
                numberOne = '';
                line += '-';
                document.getElementById("inOutLine").innerHTML = '-'; 
            }
            else {
                if (operChar === '-' && numberOne === '0' && document.getElementById("inOutLine").innerHTML === '0') {
                    numberOne = '';
                    line += '-';
                    document.getElementById("inOutLine").innerHTML = '-'; 
                }
                else {
                    p1 = numberOne;
                    oper = operChar;
                    if (operChar === 'xª') {
                        oper = operChar.substring(2,1);
                    }
                    lineMem = `${p1}${oper}`;
                    line = '';
                    document.getElementById("memoryLine").innerHTML = lineMem;
                    document.getElementById("inOutLine").innerHTML = '';
                    if (oper === '√'){
                        decision(p1);
                    }
                }
            }
        } 
    }
}

const decision = (numberTwo, operDec = '') => {
    p1 = Number(p1);
    p2 = Number(numberTwo);
    lineMem = '';

    if (oper === '+'){
        // Math.round(eval(display.innerHTML)*100)*0.01
        result = Math.round((p1 + p2)*100)*0.01;
        changeBackground(result);
    }
    if (oper === '-'){
        result = Math.round((p1 - p2)*100)*0.01;
        changeBackground(result);
    }
    if (oper === '*'){
        result = Math.round((p1 * p2)*100)*0.01;
        changeBackground(result);
    }
    if (oper === '/'){
        result = Math.round((p1 / p2)*100)*0.01;
        changeBackground(result);
    }
    if (oper === 'ª'){
        result = Math.round((p1 ** p2)*100)*0.01;
        changeBackground(result);
    }
    if (oper === '√'){
        result = Math.sqrt(p1);
        document.getElementById("memoryLine").innerHTML = '';
        document.getElementById("inOutLine").innerHTML = String(result).substr(0,11);
        changeBackground(result);
        letReset();
    }
    if (operDec !== '') {
        lineMem = String(result).substr(0,44) + operDec;
        document.getElementById("memoryLine").innerHTML = lineMem;
        document.getElementById("inOutLine").innerHTML = '';
        p1 = result;
        line = '';    
    }
    else {
        document.getElementById("memoryLine").innerHTML = '';
        document.getElementById("inOutLine").innerHTML = String(result).substr(0,44);    
        letReset();
    }
}

const letReset = () => {
    line = '', lineMem = '', p1 = '', p2 = '', oper = '';
}

const zeroCheckOne = (str, numZero) => {
    if (str === '0' && numZero !== '.') {
      line = '';
      return true;
    } 
    return true;
}

const zeroCheck = (str, numZero) => (str[0] === '0' && numZero === '0' && str.length < 2  ? false : true);

const limitStr = (str) => str.length <= 44;

const pointCheck = (str, numPoint) => {
    if (str.includes('.')){
      if ('.' !== str[0] && str.indexOf('.') === str.lastIndexOf('.') && numPoint !== '.') return true;
      else return false;
    }
    if (str === '' && numPoint === '.') return false;
    return true;
}

const parsLineIn = () => {
    return document.getElementById('inOutLine').innerHTML;
}

const changeBackground = (result = 0) => {
    let color = '';
    let anime = '';
    if (result === 0){
        anime = 'backgroundZero 3s'
    }
    if (result > 0){
        anime = 'backgroundPositive 3s'
    }
    if (result < 0){
        anime = 'backgroundNegative 3s'
    }
    document.body.style.animation = anime;
 }