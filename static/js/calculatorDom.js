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
  setNaNsToZeros();
  setBloodAlcoholText();
  result.classList.remove('hidden');
  form.classList.add('hidden');
};

goBack.onclick = () => {
  form.classList.remove('hidden');
  result.classList.add('hidden');
};

const checkRequiredFields = () => {
  if(isNaN(kg) || isNaN(time)) alert('Please provide time and weight!');
};

const setNaNsToZeros = () => {
  if(isNaN(beer.value)) beer.value = 0;
  if(isNaN(wine.value)) wine.value = 0;
  if(isNaN(shot.value)) shot.value = 0;
};

const setBloodAlcoholText = () => {
  let grammBeer = beer.value * 4.5 * 0.8; 
  let grammWine = wine.value * 12 * 0.8;
  let grammShot = shot.value * 40 * 0.8;
  let bloodAlcoholText = (grammBeer + grammWine + grammShot) / kg;
  bloodAlcohol.textContent = bloodAlcoholText;
};
