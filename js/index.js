function responsiveNav() {
  console.log("called")
  let navbar = document.querySelector("#navbar");
  if (navbar.className === "navigation") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navigation";
  }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};
