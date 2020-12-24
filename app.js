var btnTranslate = document.querySelector('#translate-btn');
var inputText = document.querySelector('#text-input');
var Output = document.querySelector('#text-output');


//server

//var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    console.log("error occured", error)
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
        .then (json => {
            var translatedText = json.contents.translated
            Output.innerText = translatedText})
        .catch(errorHandler)
    };

btnTranslate.addEventListener("click", clickEventHandler);
