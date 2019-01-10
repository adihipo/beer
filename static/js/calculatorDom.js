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

const checkRequiredFields = () => {
  if(isNaN(parseInt(kg.value))|| document.querySelector('input[name="sex"]:checked') == null) {
    alert('Please set weight and your gender!');
    return false;
  }
  return true;
};

const setBloodAlcoholText = () => {
  var grammBeer = parseInt(beer.value) * 5 * 4.5 * 0.8; 
  var grammWine = parseInt(wine.value) * 1 * 12 * 0.8;
  var grammShot = parseInt(shot.value) * 0.4 * 40 * 0.8;
  var bloodAlcoholText = ((grammBeer + grammWine + grammShot) / (kg.value * genderNumber())) - parseInt(time.value) * 0.15;
  bloodAlcohol.textContent = bloodAlcoholText;
  setDescription(bloodAlcoholText);
  sober.textContent = bloodAlcoholText / 0.15;
};

const genderNumber = () => {
  var gender = document.querySelector('input[name="sex"]:checked').value;
  if(gender == 'female') {
    return 0.55;
  }
  if(gender == 'male') {
    return 0.68;
  }
};

const setDescription = (number) => {
  if(number < 0.5) {
    title =  'Normal (0 - 0.5)';
    descriptiontext = 'You seem normal. You should drink more.';
  } else if(number < 1.2) {
    title = 'Euphoric (0.5 - 1.2)';
    descriptiontext = 'You feel euphoric and free because of alcohol. You should do something silly!';
  } else if(number < 2.1) {
    title = 'Pumped (1.2 - 2.1)';
    descriptiontext = 'There is some inbalance in your mood. You may do something that you normally wouldn\'t';
  } else if(number < 2.8) {
    title = 'Confused (2.1 - 2.8)';
    descriptiontext = 'Movements geting shaky. Vision gets blurry. Maybe you even don\'t know where you are. You can start feeling sick';
  } else if(number < 3.8) {
    title = 'Sleepy (2.8 - 3.8)';
    descriptiontext = 'Moves uncoordinated and slow. Reaction time is really bad. You may experience extreme nausea, vomiting. You can fall asleep anywhere even in any uncomfortable position.';
  } else if(number < 5) {
    title = 'Choma (3.8 - 5)';
    descriptiontext = 'Total loss of consciousness and low body temperature. Your circulation and breathing become uncoordinated.';
  } else {
    title = 'Dead (5 - )';
    descriptiontext = 'It\'s nearly impossible to achieve it.';
  }
  descriptionTitle.textContent = title;
  description.textContent = descriptiontext;
};