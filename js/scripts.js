function populateArrayFromInput(countToInput){
let outputArray = [];
for(i = 0; i <= countToInput; i++) {
    outputArray.push(i);
}
return outputArray;
}

function beepBoopRoger(countToInput){
let arrayPopFromInput = populateArrayFromInput(countToInput);
let newOutputArray = [];

arrayPopFromInput.forEach(function(element) {
   if(element.toString().includes(3)) {
    newOutputArray.push('"Won\'\t you be my neighbor?"');
  }
  else if(element.toString().includes(2)) {
    newOutputArray.push('"Beep!"');
  }
  else if(element.toString().includes(1)) {
    newOutputArray.push('"Beep!"');
  }
  else {
    newOutputArray.push(element);
 }
});
return newOutputArray;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let countToInput = document.getElementById("userInput");
  let paraElement = document.getElementById("results");
  paraElement.innerText = beepBoopRoger(countToInput.value);
}

window.addEventListener("load", function() {
  document.querySelector("form#input-form").addEventListener("submit", handleFormSubmission);


});