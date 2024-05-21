

const gridAppend = document.getElementById("grid");

let articleEl;

let numeriSceltiDalPc = [];

for(let i = 0; i < 5; i++){
    let randomNumber = getUniqueRandomNumberInt(numeriSceltiDalPc, 1, 60)
    numeriSceltiDalPc.push(getUniqueRandomNumberInt(numeriSceltiDalPc, 1, 60))
    createEl(articleEl, gridAppend, "article", randomNumber)
}

setTimeout (noDisplayEl, 3000, gridAppend);
let userNumber;
let userNumberArray;
setTimeout(askFiveNumber, 3000, userNumber, userNumberArray, 1, 60)

//******FUNZIONI********//
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max + 1) - min) + min;
}

function getUniqueRandomNumberInt (numeriGiaEstratti, min, max){

    let randomNumber;
    let isRandomNumberAlreadyExtracted = true;
    while(isRandomNumberAlreadyExtracted){
        randomNumber = getRandomNumber(min, max);
        // numeriGiaEstratti.push(randomNumber);

        if(numeriGiaEstratti.includes(randomNumber)){
            isRandomNumberAlreadyExtracted = true;
        } else{
            isRandomNumberAlreadyExtracted = false;
        }
    }
    return randomNumber 
}

function createEl (elemento, elementoAppend, tag, qualcosa){
    elemento = document.createElement(tag);
    elemento.append(qualcosa);
    return elementoAppend.appendChild(elemento);
}

function noDisplayEl(elemento){
    return elemento.classList.add("display-none");
}

function askFiveNumber (numero, listaArray, min, max){
    let i = 0;
    while(i < 5){
        Number.parseInt(prompt("Dimmi un numero che pensi era presente!"))
        if(numero < min || numero > max || Number.isNaN(numero)){
            alert("Hai sbagliato a scrivere ti facciamo riprovare!")
        }else{
            listaArray.push(numero);
            i++;
        }
    }
    
}