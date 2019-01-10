const kg = document.getElementById('kg');
const times = document.getElementById('time');
const beer = document.getElementById('beer');
const wine = document.getElementById('wine');
const shot = document.getElementById('shot');
const bloodAlcohol = document.getElementById('bloodalcohol');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const goBack = document.getElementById('goback');

//console.log(new Date().toLocaleString());

submit.onclick = () => { 
  if(checkRequiredFields()) {
    setNaNsToZeros();
    setBloodAlcoholText();
    result.classList.remove('hidden');
    form.classList.add('hidden');
  }
};

goBack.onclick = () => {
  form.classList.remove('hidden');
  result.classList.add('hidden');
};

const checkRequiredFields = () => {
  if(isNaN(parseInt(kg.value))) {
    alert('Please set weight');
    return false;
  }
  return true;
};

const setNaNsToZeros = () => {
  if(isNaN(parseInt(beer.value))) {
    beer.value = 0;
  }
  if(isNaN(parseInt(wine.value))) {
    wine.value = 0;
  }
  if(isNaN(parseInt(shot.value))) {
    shot.value = 0;
  }
};

const setBloodAlcoholText = () => {
  var grammBeer = parseInt(beer.value) * 4.5 * 0.8; 
  var grammWine = parseInt(wine.value) * 12 * 0.8;
  var grammShot = parseInt(shot.value) * 40 * 0.8;
  var bloodAlcoholText = (grammBeer + grammWine + grammShot) / kg.value;
  bloodAlcohol.textContent = bloodAlcoholText;
};
