//variaveis = variable 

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessege = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close");





/* + duas maneiras de atribuir funcao ao evento

arrow-function
form.onsubmit = () =>{}
---------------------------

form.onsubmit = handleSubmit
function handleSubit(){

}

*/

// funcao anonima
form.onsubmit = function(event){
/*    
     event.preventDefault() = evite o padrao
     neste caso evita o procedimento padrao do form
     que é  enviar o formular e carregar a página  

 */ 

    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const result = IMC(weight, height);
    const message = `Seu IMC é ${result}`;

    modalMessege.innerText = message;
    modalWrapper.classList.add("open");
}

modalBtnClose.onclick = ()=> {
    modalWrapper.classList.remove("open");

}

function IMC(weight, height) {
    return(weight/((height / 100) ** 2)).toFixed(2);

}

