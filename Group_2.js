document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => data[key] = value);


  sessionStorage.setItem('formData', JSON.stringify(data));


  displaySubmittedData();
});

function displaySubmittedData() {
  const data = JSON.parse(sessionStorage.getItem('formData'));

  if (data) {
    let output = '<ul>';
    for (const key in data) {
      output += `<li><strong>${key}:</strong> ${data[key]}</li>`;
    }
    output += '</ul>';

    document.getElementById('data-output').innerHTML = output;
  }

  document.getElementById('registration-form').classList.add('hidden');
  document.getElementById('submitted-data').classList.remove('hidden');
}

function goBack() {
  document.getElementById('submitted-data').classList.add('hidden');
  document.getElementById('registration-form').classList.remove('hidden');
}

window.onload = function() {
  if (sessionStorage.getItem('formData')) {
    displaySubmittedData();
  }
}