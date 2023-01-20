function populateArrayFromInput(countToInput){
let outputArray = [];
for(i = 0; i <= countToInput; i++) {
    outputArray.push(i);
}
return outputArray;
}

function isOneIntheArray(number) {

return '1'.includes(number);

}

function beep(countToInput){

let outputArray = [];

let arrayPopFromInput = populateArrayFromInput(countToInput);
  
arrayPopFromInput.forEach(function(element){
  
  if(isOneIntheArray(element)){
    outputArray = "beep!";

    console.log(outputArray);
  }
  else {
     outputArray = outputArray + element.toString();
  }
});

return outputArray;
}



function handleFormSubmission(event) {
  event.preventDefault();
  let countToInput = document.getElementById("userInput");
  let paraElement = document.getElementById("results");
  paraElement.innerText = beep(countToInput.value);
}

window.addEventListener("load", function() {
  document.querySelector("form#input-form").addEventListener("submit", handleFormSubmission);


});