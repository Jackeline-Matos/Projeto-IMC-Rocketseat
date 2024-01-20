//variaveis = variable 

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


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

 */    event.preventDefault()

 const weight = inputWeight.value;
 const height = inputHeight.value

 console.log(weight, height);

    
}

