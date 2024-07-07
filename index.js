//const el1 = document.getElementById('container1');
//if (el1) {
//  const hiddenDiv1 = document.getElementById('hidden-div1');
//  el1.addEventListener('mouseover', function handleMouseOver() {
//    hiddenDiv1.style.display = 'block';
//  // hiddenDiv.style.visibility = 'visible';
//  });
//
//  el1.addEventListener('mouseout', function handleMouseOut() {
//    hiddenDiv1.style.display = 'none';
//  // hiddenDiv.style.visibility = 'hidden';
//  });
//}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}