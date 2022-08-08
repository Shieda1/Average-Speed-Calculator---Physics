// https://calculator.swiftutors.com/average-speed-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageSpeedRadio = document.getElementById('averageSpeedRadio');
const totalDistanceCoveredRadio = document.getElementById('totalDistanceCoveredRadio');
const timeTakenRadio = document.getElementById('timeTakenRadio');

let averageSpeed;
let totalDistanceCovered = v1;
let timeTaken = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

averageSpeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Distance Covered (m)';
  variable2.textContent = 'Time Taken (s)';
  totalDistanceCovered = v1;
  timeTaken = v2;
  result.textContent = '';
});

totalDistanceCoveredRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Speed (m/s)';
  variable2.textContent = 'Time Taken (s)';
  averageSpeed = v1;
  timeTaken = v2;
  result.textContent = '';
});

timeTakenRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Speed (m/s)';
  variable2.textContent = 'Total Distance Covered (m)';
  averageSpeed = v1;
  totalDistanceCovered = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averageSpeedRadio.checked)
    result.textContent = `Average Speed = ${computeAverageSpeed().toFixed(2)} m/s`;

  else if(totalDistanceCoveredRadio.checked)
    result.textContent = `Total Distance Covered = ${computeTotalDistanceCovered().toFixed(2)} m`;

  else if(timeTakenRadio.checked)
    result.textContent = `Time Taken = ${computeTimeTaken().toFixed(2)} s`;
})

// calculation

function computeAverageSpeed() {
  return Number(totalDistanceCovered.value) / Number(timeTaken.value);
}

function computeTotalDistanceCovered() {
  return Number(averageSpeed.value) * Number(timeTaken.value);
}

function computeTimeTaken() {
  return Number(totalDistanceCovered.value) / Number(averageSpeed.value);
}