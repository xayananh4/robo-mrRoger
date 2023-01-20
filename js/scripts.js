function beep(countToInput){


  
// var filler = [];
// for(var i=0; i<5; i++){
//     filler.push(i); //Example, pushing 5 integers in an array
// }

//Filler is now equivalent to: [0, 1, 2, 3, 4]
  
let outputArray = [];
  for(i = 0; i <= countToInput; i++) {
    
    if(i === 1){
      outputArray.push("Beep!");
      console.log(outputArray);
    }
    else{
      outputArray.push(i); 
      console.log(outputArray);
    }
 
  }
  console.log(outputArray);
return outputArray;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let countToInput = document.getElementById("userInput");
  let paraElement = document.getElementById("results");
  paraElement.innerText = beep(countToInput.value).sp;
}

window.addEventListener("load", function() {
  document.querySelector("form#input-form").addEventListener("submit", handleFormSubmission);


});