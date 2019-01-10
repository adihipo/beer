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
const radios = document.getElementsByName('sex');
const femaleLabel = document.getElementById('femalelabel');
const maleLabel = document.getElementById('malelabel');

var timer = 0;

beer.value = 0;
wine.value = 0;
shot.value = 0;

radios[0].checked = true;
femaleLabel.classList.add('checked');

for(let i = 0; i < radios.length; i++) {
  radios[i].onchange = () => {
    if(radios[0].checked) {
      femaleLabel.classList.add('checked');
      maleLabel.classList.remove('checked');
    } else {
      femaleLabel.classList.remove('checked');
      maleLabel.classList.add('checked');
    }
  };
};

while(timer <= 10) {
  var HTMLString = "";
  HTMLString += '<option class="options" value="' + timer + '">' + timer + ' hour(s)</option>';
  time.insertAdjacentHTML('beforeend', HTMLString);
  timer += 0.5;
};

plusbeer.onclick = () => {
  beer.value++;
};

minusbeer.onclick = () => {
  if(beer.value != 0) {
    beer.value--;
  }
};

pluswine.onclick = () => {
  wine.value++;
};

minuswine.onclick = () => {
  if(wine.value != 0) {
    wine.value--;
  }
};

plusshot.onclick = () => {
  shot.value++;
};

minusshot.onclick = () => {
  if(shot.value != 0) {
    shot.value--;
  }
};

const checkRequiredFields = () => {
  if(isNaN(parseInt(kg.value))) {
    alert('Please set weight!');
    return false;
  }
  return true;
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

submit.onclick = () => { 
  if(checkRequiredFields()) {
    setBloodAlcoholText();
    result.classList.remove('hidden');
    form.classList.add('hidden');
  }
};

goBack.onclick = () => {
  form.classList.remove('hidden');
  result.classList.add('hidden');
};