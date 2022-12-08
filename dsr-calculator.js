const box = document.getElementById('fixed-income-earner');

function handleRadioClick() {
  if (document.getElementById('fixed-income-earner').checked) {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
}

const radioButtons = document.querySelectorAll('fixed-salary');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});



alert("The calculator not ready yet. Nelson is still working on this calulator. ");
