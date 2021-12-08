
window.addEventListener("DOMContentLoaded", function(event)  {
    console.log("DOM loaded ^_^");
function proiz(){
    let num1 = document.getElementById('coli').value;
    let num2 = document.getElementById('cena').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (!(Number.isInteger(num1) && Number.isInteger(num2))|| num1 < 0 || num2 < 0){
        document.getElementById('out').innerHTML = `Результат: Error`
        alert("Error!!!");

    }
    else{
        var out = num1 * num2;
        document.getElementById('out').innerHTML = `Результат: ${out} руб.`
    }
}


window.addEventListener("DOMContentLoaded", function(event)  {
    console.log("DOM loaded ^_^");

    let buttonProiz = document.getElementById("proiz");
    buttonProiz.addEventListener("Click",proiz);
})
