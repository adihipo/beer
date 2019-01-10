const time = document.getElementById('time');
var timer = 0;

while(timer <= 10) {
  var HTMLString = "";
  HTMLString += '<option value="' + timer + '">' + timer + ' hour(s)</option>';
  time.insertAdjacentHTML('beforeend', HTMLString);
  timer += 0.5;
};