var btnTranslate = document.querySelector('#translate-btn');
var inputText = document.querySelector('#text-input');
var Output = document.querySelector('#text-output');


//server

var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function errorHandler(){
    console.log("error occured" ,console.error())
    alert("something wrong with server")
}

function translatedUrl(text)
{
     return serverURL + "?" + "text=" +text;
}

function clickEventHandler()
{
    //Output.innerText= inputText.value;
    var input = inputText.value;
    fetch(translatedUrl(input))
        .then (response => response.json())
        .then (json => console.log(json.contents.translated))
        .catch(errorHandler)
    };

btnTranslate.addEventListener("click", clickEventHandler);
