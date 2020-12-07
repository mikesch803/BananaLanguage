var btnTranslate = document.querySelector('#translate-btn');
var inputText = document.querySelector('#text-input');
var Output = document.querySelector('#text-output');
//console.log(Output)

function clickEventHandler()
{
    Output.innerText="translated " + inputText.value
};
btnTranslate.addEventListener("click", clickEventHandler);
