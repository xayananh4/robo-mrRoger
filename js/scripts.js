// function to populate an array 
function populateArrayFromInput(countToInput) {
  let outputArray = [];
  for (i = 0; i <= countToInput; i++) {
    outputArray.push(i);
  }
  return outputArray;
}

//business logic
function beepBoopRoger(countToInput) {
  let arrayPopFromInput = populateArrayFromInput(countToInput);
  let newOutputArray = [];

  if (arrayPopFromInput.length !== 0) {
    arrayPopFromInput.forEach(function (element) {
      if (element.toString().includes(3)) {
        newOutputArray.push('"Won\'t you be my neighbor?"');
      }
      else if (element.toString().includes(2)) {
        newOutputArray.push('"Boop!"');
      }
      else if (element.toString().includes(1)) {
        newOutputArray.push('"Beep!"');
      }
      else {
        newOutputArray.push(element);
      }
    });
    return newOutputArray.join(" ");
  }
  else {
    return null;
  }
}

//UI logic
function handleFormSubmission() {
  let countToInput = document.getElementById("userInput");
  let beepBoopRogerResults = beepBoopRoger(countToInput.value);
  let paraElement = document.getElementById("results");
  let resultsFromUser = document.querySelector("div#resultsFromUser");
  let errorPassage = document.querySelector("div#error-passage");

  if (beepBoopRogerResults) {
    resultsFromUser.removeAttribute("class");
    errorPassage.setAttribute("class", "defaultSettingHidden");
    resultsFromUser.innerText = beepBoopRogerResults;
  }
  else {
    errorPassage.removeAttribute("class");
    resultsFromUser.setAttribute("class", "defaultSettingHidden");
    errorPassage.innerText = "Can You Please Enter In Higher Number!";
  }
}

window.addEventListener("load", function () {

  document.querySelector("form#input-form").addEventListener("submit", function (event) {
    handleFormSubmission();
    event.preventDefault();
  });
});