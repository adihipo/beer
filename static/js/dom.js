const kg = document.getElementById('kg');
const time = document.getElementById('time');
const beer = document.getElementById('beer');
const wine = document.getElementById('wine');
const shot = document.getElementById('shot');
const plusbeer = document.getElementById('plusbeer');
const minusbeer = document.getElementById('minusbeer');
const pluswine = document.getElementById('pluswine');
const minuswine = document.getElementById('minuswine');
const plusshot = document.getElementById('plusshot');
const minusshot = document.getElementById('minusshot');
const bloodAlcohol = document.getElementById('bloodalcohol');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const goBack = document.getElementById('goback');
const descriptionTitle = document.getElementById('descriptiontitle');
const description = document.getElementById('description');
const sober = document.getElementById('sober');
const imd =  document.getElementById('img');

var timer = 0;

beer.value = 0;
wine.value = 0;
shot.value = 0;

while(timer <= 10) {
  var HTMLString = "";
  HTMLString += '<option value="' + timer + '">' + timer + ' hour(s)</option>';
  time.insertAdjacentHTML('beforeend', HTMLString);
  timer += 0.5;
};

beer.onchange = () => {
  if(parseInt(beer.value) <= 0) {
    beer.value = 0;
  }
};

wine.onchange = () => {
  if(parseInt(wine.value) <= 0) {
    wine.value = 0;
  }
};

shot.onchange = () => {
  if(parseInt(shot.value) <= 0) {
    shot.value = 0;
  }
};