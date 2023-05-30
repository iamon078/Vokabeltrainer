let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
let randomgermanword;

function addvoc() {
  dictionary[germanText.value] = englischText.value;

  germanText.value = "";
  englischText.value = "";

  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  render();
}
function render() {
  voclist.innerHTML = "";
  for (let key in dictionary) {
    voclist.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
  }
}

function nextvoc() {
  let obj_keys = Object.keys(dictionary);
  randomgermanword = obj_keys[Math.floor(Math.random() * obj_keys.length)];
  word.innerHTML = `${dictionary[randomgermanword]}?`;
}

function compare() {
  if (germanText.value == randomgermanword) {
    text.innerHTML = `Richtig!!`;
  } else {
    text.innerHTML = `Falsch!!`;
  }
  germanText.value = "";
  nextvoc();
}
