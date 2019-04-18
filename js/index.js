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

function checkForm(){
  let entername = document.querySelector("#name").value;
  let enteraddress = document.querySelector("#email").value;
  let entermsg = document.querySelector("#message").value;
  let enterphone = document. querySelector("#phone").value;

  let namemsg = document.querySelector("#nameError");
  let addrmsg = document.querySelector("#emailError");
  let msgmsg = document.querySelector("#msgError");
  let phonemsg = document.querySelector("#phoneError")

  var checked = true;

  if (entername.length===0){
    namemsg.style.display="block";
    console.log("there's no name");
    checked = false;
      }
  else{
    namemsg.style.display="none";
    console.log("there is a name");
      };

  if (enteraddress.length===0){
    addrmsg.style.display="block";
    console.log("there's an address");
    checked = false;
      }
  else{
    addrmsg.style.display="none";
    console.log("there is no address");
      };

  if (entermsg.length===0){
    msgmsg.style.display="block";
      console.log("there's a message");
      checked = false;
    }
  else{
    msgmsg.style.display="none";
    console.log("there is no message");
    };

  if (entermsg.length===0){
    phonemsg.style.display="block";
    console.log("there's a phone umber");
    checked = false;
      }
  else{
    phonemsg.style.display="none";
    console.log("there is no phone number");
    };
  return checked;
};

window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.querySelector("#navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
