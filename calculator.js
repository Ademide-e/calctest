const message = document.querySelector('#inputDisplay')
const addition = document.getElementById('b10')
const subtraction = document.getElementById('b11')
const division = document.getElementById('b12')
const multiplication = document.getElementById('b14')

let result;

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
    try{
    let answer = eval(characters.join(""));
    clearAllCharacters()
    characters.push(answer)
    console.log(answer);
    message.innerHTML = answer;
    }
    catch(error){
        message.innerHTML = "Error"
    }

    if (characters.length < 1){
        message.innerHTML = '0'
    }
}
// function equals2(){
//     if (characters.length < 1){
//         message.innerHTML = '0'
//     }
// }

// try creating another class for get operand