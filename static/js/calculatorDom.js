const kg = document.getElementById('kg');
const times = document.getElementById('time');
const beer = document.getElementById('beer');
const wine = document.getElementById('wine');
const shot = document.getElementById('shot');
const bloodAlcohol = document.getElementById('bloodalcohol');

//console.log(new Date().toLocaleString());


const setBloodAlcoholText = () => {
  let grammBeer = beer.value * 4.5 * 0.8; 
  let grammWine = wine.value * 12 * 0.8;
  let grammShot = shot.value * 40 * 0.8;
  let bloodAlcoholText = (grammBeer + grammWine + grammShot) / kg;
  bloodAlcohol.textContent = bloodAlcoholText;
};
