// function to populate array 
function populateArrayFromInput(countToInput){
let outputArray = [];
for(i = 0; i <= countToInput; i++) {
    outputArray.push(i);
}
return outputArray;
}

//business logic
function beepBoopRoger(countToInput){
let arrayPopFromInput = populateArrayFromInput(countToInput);
let newOutputArray = [];

if(arrayPopFromInput.length !== 0){  
  arrayPopFromInput.forEach(function(element) {
    if(element.toString().includes(3)) {
      newOutputArray.push('"Won\'\t you be my neighbor?"');
    }
    else if(element.toString().includes(2)) {
      newOutputArray.push('"Boop!"');
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
else {
  return null;
}
}

//UI logic
function handleFormSubmission(event) {  
  event.preventDefault();
  let countToInput = document.getElementById("userInput");
  let beepBoopRogerResults = beepBoopRoger(countToInput.value);
  let paraElement = document.getElementById("results");
  let resultsFromUser = document.querySelector("div#resultsFromUser");
  
 
  
  if(beepBoopRogerResults)
  {
    resultsFromUser.innerText = beepBoopRogerResults;
  }
  else
  {
    resultsFromUser.setAttribute("class", "defaultSettingHidden");
    document.querySelector("div#error-passage").innerText = "Please enter numbers 0 or higher";
  }

  
  
  
}

window.addEventListener("load", function() {
  document.querySelector("form#input-form").addEventListener("submit", handleFormSubmission);
});