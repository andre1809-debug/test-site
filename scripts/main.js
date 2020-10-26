let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setPlayerName() {
  let playerName = prompt('Please enter player name.');
  if(!myName) {
    setPlayerName();
  } else {
  	localStorage.setItem('name', myName);
    myHeading.innerHTML = 'About, ' + myName;
 }
}

if(!localStorage.getItem('name')) {
  setPlayerName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'About, ' + storedName;
}

myButton.onclick = function() {
  setPlayerName();
}


