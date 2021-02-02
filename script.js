$('#currentDay').html(`${moment().format("dddd MMM Do YYYY")}`)
function colorArea() {
  for (var i = 0; i < 9; i++) {
    var rowTime = $(".hour").get(i).id;
    var x = moment().format('H');
    actualTime = parseInt(x);
    if (rowTime < actualTime) {
      $(`#textInput${i}`).addClass("past");
    }
    else if (rowTime > actualTime) {
      $(`#textInput${i}`).addClass("future");
    }
    else {
      $(`#textInput${i}`).addClass("present");
    }
  }
}
colorArea()


// To save text using the Save button 

function saveThing(el) {
    console.log(el);
    var description = el.previousElementSibling;
    var parent = el.parentElement;
    console.log(description.value);
    console.log(parent.id);
    localStorage.setItem(parent.id, description.value);
  }
  
  function getFromLocal() {
    for (let index = 9; index <= 17; index++) {
      let currentval = localStorage.getItem(`hour-${index}`);
      let currentEl = document.getElementById(`btn-${index}`);
      let currentDescription = currentEl.previousElementSibling;
​
      currentDescription.value = currentval;
    }
  }



for (var i=0 ; i<oldSavedInputs; i++){
document.querySelector('textInput0').innerHTML += `${oldSavedInputs[i].value}` 
}


// to store in local storage 
function saveButton (event){


// step 1: saving the textarea input in savedInputs 
localStorage.setItem(div.id,textarea.value)


//step 2: translate this variable into local storage. need to convert to stringify 
localStorage.savedInputs = JSON.stringify(savedInputs)

//step 3: set up JSON parse to retrive information from local storage for user 
var oldSavedInputs = JSON.parse(localStorage.savedInputs) 

// Step 4: enter all the saved variables in EACH row (not sure bout .value)
for (var i=0 ; i<oldSavedInputs; i++){
document.querySelector('textInput0').innerHTML += `${oldSavedInputs[i].value}` 
}

