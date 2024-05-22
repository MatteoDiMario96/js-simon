

const gridAppend = document.getElementById("grid");

let articleEl;

let numeriSceltiDalPc = [];

for(let i = 0; i < 5; i++){
    let randomNumber = getUniqueRandomNumberInt(numeriSceltiDalPc, 1, 60)
    numeriSceltiDalPc.push(getUniqueRandomNumberInt(numeriSceltiDalPc, 1, 60))
    createEl(articleEl, gridAppend, "article",numeriSceltiDalPc[i])
}

setTimeout (noDisplayEl, 3000, gridAppend);
let userNumber;
let userNumberArray = [];
setTimeout(askFiveNumber, 4000, userNumber, userNumberArray, 1, 60)

setTimeout(function(){
    let arrayRisultati = checkNumber(numeriSceltiDalPc, userNumberArray)
    const mainAppend = document.querySelector("main");
    const newSection = document.createElement("section");
    newSection.id = "grid";
    mainAppend.appendChild(newSection)

    for(let i = 0; i < 5; i++){
        createEl(articleEl, newSection, "article", arrayRisultati[i] && numeriSceltiDalPc[i])
    }
    console.log(arrayRisultati, userNumberArray, numeriSceltiDalPc);
}, 5000)






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

function displayEl(elemento){
    return elemento.classList.add("display-inline-block");
}

function askFiveNumber (numero, listaArray, min, max){
    let i = 0;
    while(i < 5){
        numero = Number.parseInt(prompt("Dimmi un numero che pensi era presente!"))
        if(numero < min || numero > max || Number.isNaN(numero)){
            alert("Hai sbagliato a scrivere ti facciamo riprovare!")
        }else{
            listaArray.push(numero);
            i++;
        }
    }
    
}

function checkNumber(arrayA, arrayB){
    const correctAnswer = [];
    for(let i = 0; i < arrayA.length; i++){
        if(arrayB.includes(arrayA[i])){
            correctAnswer.push(true);
        }else{
            correctAnswer.push(false);
        }
    }
    return correctAnswer
} 