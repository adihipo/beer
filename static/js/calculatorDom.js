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
const description = document.getElementById('description');
const sober = document.getElementById('sober');

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
  var bloodAlcoholText = ((grammBeer + grammWine + grammShot) / (kg.value * 0.62)) - parseInt(times.value) * 0.15;
  bloodAlcohol.textContent = bloodAlcoholText;
  description.textContent = setDescription(bloodAlcoholText);
  sober.textContent = bloodAlcoholText / 0.15;
};

const setDescription = (number) => {
  if(number < 0.5) {
    return '0-0.5';
  } else if(number < 1.2) {
    return '0.5-1.2';
  } else if(number < 2.1) {
    return '1.2-2.1';
  } else if(number < 2.8) {
    return '2.1-2.8';
  } else if(number < 3.8) {
    return '2.8-3.8';
  } else if(number < 5){
    return '3.8-5';
  } else {
    return 'dead';
  }
};
