// function to populate an array 
function populateArrayFromInput(countToInput) {
  let outputArray = [];
  for (i = 0; i <= countToInput; i++) {
    outputArray.push(i);
  }
  return outputArray;
}

//business logic
function reverseArray(countToInput) {
  let arrayPopFromInput = populateArrayFromInput(countToInput);
  let reversed_array = [];

  for (let i = arrayPopFromInput.length - 1; i >= 0; i--) {
    reversed_array.push(arrayPopFromInput[i]);
  }
  return reversed_array.join(" ");
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
function reserverFormSubmission() {
  let countToInput = document.getElementById("userInput");
  let reverseResults = reverseArray(countToInput.value);
  let reverseResultsElement = document.querySelector("div#reversed");
  reverseResultsElement.removeAttribute("class");
  reverseResultsElement.innerText = reverseResults;

}

//UI logic
function handleFormSubmission() {
  let countToInput = document.getElementById("userInput");
  let beepBoopRogerResults = beepBoopRoger(countToInput.value);
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
  let reverseBtn = document.querySelector("button#reverse");

  document.querySelector("form#input-form").addEventListener("submit", function (event) {
    handleFormSubmission();
    event.preventDefault();
  });

  // New event listener for after form submit event the reverse button is shown
  document.querySelector("form#input-form").addEventListener("submit", function () {
    reverseBtn.removeAttribute("class");
  });

  // Event listener to reverse results of array values. when user clicks the reverse button
  reverseBtn.addEventListener("click", function () {
    reserverFormSubmission();
  });
});