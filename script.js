document.addEventListener("DOMContentLoaded",function (){
    const counterElement = document.querySelector("#cookiecounter");
    const imageElement = document.querySelector("#cookie");
   imageElement.addEventListener("click", function() {
        counterElement.innerText = parseInt(counterElement.innerText) + 1;
    })
})