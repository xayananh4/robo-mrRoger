function populateArrayFromInput(countToInput){
let outputArray1 = [];
for(i = 0; i <= countToInput; i++) {
    outputArray1.push(i);
}
return outputArray1;
}

function beep(countToInput){
  
let outputArray = [];
let arrayPopFromInput = populateArrayFromInput(countToInput);
  
for(i = 0; i <= arrayPopFromInput.length -1; i++) {
 
  if(arrayPopFromInput[i].includes(1)) 
  {
    return true;
  }
}
  
  // if(!arrayPopFromInput.includes(1,0)){
  //     arrayPopFromInput[i] = "Beep!";
  //     outputArray.push(arrayPopFromInput[i].toString());
    
  //   }
  //   else{
  //     outputArray.push(i); 
  //   }
 
  // }



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