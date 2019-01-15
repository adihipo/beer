const setBloodAlcoholText = () => {
  var grammBeer = parseInt(beer.value) * 5 * 4.5 * 0.8; 
  var grammWine = parseInt(wine.value) * 1 * 12 * 0.8;
  var grammShot = parseInt(shot.value) * 0.4 * 40 * 0.8;
  var bloodAlcoholText = ((grammBeer + grammWine + grammShot) / (kg.value * genderNumber())) - parseInt(time.value) * 0.15;
  getGiphy(bloodAlcoholText);
  if(Math.round((bloodAlcoholText / 0.15) * 10) / 10 <= 0) {
    bloodAlcohol.textContent = 'Your blood alcohol is: 0';
    setDescription(0);
    sober.textContent = 'You can actually drive right now.'
  } else {
    bloodAlcohol.textContent = 'Your blood alcohol is: ' + Math.round(bloodAlcoholText * 10000) / 10000;
    setDescription(bloodAlcoholText);
    sober.textContent = 'You can drive after ' + Math.round((bloodAlcoholText / 0.15) * 10) / 10 + ' hours.';
  }
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
    descriptiontext = 'There is some inbalance in your mood. You may do something that you normally wouldn\'t.';
  } else if(number < 2.8) {
    title = 'Confused (2.1 - 2.8)';
    descriptiontext = 'Movements get shaky. Vision gets blurry. Maybe you even don\'t know where you are. You may start feeling sick.';
  } else if(number < 3.8) {
    title = 'Sleepy (2.8 - 3.8)';
    descriptiontext = 'Moves uncoordinated and slow. You may experience extreme nausea, vomiting. You can fall in any position.';
  } else if(number < 5) {
    title = 'Coma (3.8 - 5)';
    descriptiontext = 'Total loss of consciousness and low body temperature. Your circulation and breathing become uncoordinated.';
  } else {
    title = 'Dead (5 - )';
    descriptiontext = 'It\'s nearly impossible to achieve it.';
  }
  descriptionTitle.textContent = title;
  description.textContent = descriptiontext;
};