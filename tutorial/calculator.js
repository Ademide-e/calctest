// const b0 = document.querySelector('#b0');
// const b1 = document.querySelector('#b1');
// const b2 = document.querySelector('#b2');
// const b3 = document.querySelector('#b3');
// const b4 = document.querySelector('#b4');
// const b5 = document.querySelector('#b5');
// const b6 = document.querySelector('#b6');
// const b7 = document.querySelector('#b7');
// const b8 = document.querySelector('#b8');
// const b9 = document.querySelector('#b9');
// const b10 = document.querySelector('#b10');
// const b11 = document.querySelector('#b11');
// const b12 = document.querySelector('#b12');
// const b13 = document.querySelector('#b13');
// const b14 = document.querySelector('#b14');
// const b15 = document.querySelector('#b15');
// const b16 = document.querySelector('#b16');
// const b17 = document.querySelector('#b17');

const message = document.querySelector('#inputDisplay')
const addition = document.getElementById('b10')
const subtraction = document.getElementById('b11')
const division = document.getElementById('b12')
const multiplication = document.getElementById('b14')

const characters = []
function getCharacter(character) {
    characters.push(character)
    console.log(characters.join(""))
    message.innerHTML = characters.join('')
}
function deleteCharacter(character) {
    characters.pop(character)
    console.log(characters.join(""))
    message.innerHTML = characters.join('');
    if (characters.length < 1){
        message.innerHTML = '0'
    }
}
function clearAllCharacters() {
    characters.length = 0;
    message.innerHTML = '0'
}

function add(a,b){
    return a + b
}
function sub(a,b){
    return a - b
}
function divides(){
    const character = ''
    const a = getCharacter(character)
    return a / b
}
function multiply(a,b){
    return a * b
}

function applyOperator(operator) {
    const characters = getFirstCharacterSet()
    const secondCharacters = getSecondCharacterSet()

    switch (operator) {
        case '+':
            add(getFirstCharacterSet, getSecondCharacterSet)
            break;
        case '-':
            sub(getFirstCharacterSet, getSecondCharacterSet)
            break;
        case '&divides;':
            divide(getFirstCharacterSet, getSecondCharacterSet)
            break;
        case '&times;':
            multiply(getFirstCharacterSet, getSecondCharacterSet)
            break;
        default:
            return;
    }

}

function equals(){
    // const element = document.getElementById('inputDisplay')
    // const message = Number(element.textContent)
    // console.log(message)
    // message.innerHTML = characters; 

    // Number(message)
    // message.innerHTML = characters.toString()

    let result = eval(characters.join(""));
    console.log(result);
    message.innerHTML = result;
    // var character
    if (characters.length < 1){
        message.innerHTML = '0'
    }
    // if(getCharacter(character)){
    //     location.reload()
    // }
}

// document.getElementById("#inputDisplay").innerText = character;
// document.getElementById("inputDisplay").addEventListener("click", characters);

//  EVENTS, DOM, Arrays
