const el1 = document.getElementById('container1');
const hiddenDiv1 = document.getElementById('hidden-div1');
el1.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv1.style.display = 'block';
  // hiddenDiv.style.visibility = 'visible';
});

el1.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv1.style.display = 'none';
  // hiddenDiv.style.visibility = 'hidden';
});

const el2 = document.getElementById('container2');
const hiddenDiv2 = document.getElementById('hidden-div2');
el2.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv2.style.display = 'block';
  // hiddenDiv.style.visibility = 'visible';
});

el2.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv2.style.display = 'none';
  // hiddenDiv.style.visibility = 'hidden';
});