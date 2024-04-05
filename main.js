
const inputNums = document.querySelector(".input_btn");




document.getElementById("main-buttons").addEventListener("click",(event)=>{
    
    if(event.target.classList.contains("key")){
        const numberClicked = event.target.textContent;
        
        alert(numberClicked)
    }

})


function parseNumbers(calcText)
{

}