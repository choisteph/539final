var modal = document.querySelector(".modal");

var img = document.querySelector('#modalimg501');
var modalImg = document.querySelector("#img1");
var captionText = document.querySelector("#caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};
