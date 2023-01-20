function isOneInTheArray(number, index) {
  
  return "1".includes(number, index);
}
function populateArrayFromInput(countToInput){
let outputArray = [];
for(i = 0; i <= countToInput; i++) {
    outputArray.push(i);
}
return outputArray;
}
function beep(countToInput){
let newOutputArray = [];
let arrayPopFromInput = populateArrayFromInput(countToInput);
// arrayPopFromInput.forEach(function(element){
  
//   if(isTwoIntheArray(element)){
//     outputArray.push('"Beep!"');
//   }
//   else {
//     outputArray.push(element);
//  }
// });
// return outputArray;
for(let i = 0; i <= arrayPopFromInput.length; i++){ 
  
  if(isOneInTheArray(i, i))
    { 
      newOutputArray.push('"Beep!"');
    }
    else 
    {
      newOutputArray.push(i);
    }

}
return newOutputArray;
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