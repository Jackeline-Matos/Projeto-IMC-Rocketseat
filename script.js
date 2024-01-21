//variaveis = variable 

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


/* 

As variaveis tb ficaram dentro do obj literal, para organizar 
melhor a leitura do código e corrigir algum erro se for o caso.

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessege = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close"); */


//objeto literal
const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    messege: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),
    
/*   
    *Essa funcao atribuida a uma propriedade tb pode
    ser escrita da seguinte forma:
open() {

},
close() {

},



 */    
    open: function(){
         Modal.wrapper.classList.add("open")
    },
    close: function () {
        Modal.wrapper.classList.remove("open")

    },
}




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

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é ${result}`

    Modal.messege.innerText = message
    //modalWrapper.classList.add("open");

        Modal.open() // a funcao do obj literal foi chamada aqui
    


}

    Modal.buttonClose.onclick = ()=> {
    //modalWrapper.classList.remove("open");
    Modal.close() // a funcao do obj literal foi chamada aqui

}

function IMC(weight, height) {
    return(weight/((height / 100) ** 2)).toFixed(2);

}

