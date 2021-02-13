const answers = document.querySelectorAll(".answers");
const arrows = document.querySelectorAll(".arrow");
let toggle = true;

function display() {
  if(toggle === true) {
    this.previousElementSibling.classList.add("questions-active");
    this.nextElementSibling.classList.add("active");
    this.classList.add("arrow-active");   
    toggle = !toggle;
  } else {
    this.previousElementSibling.classList.remove("questions-active");
    this.nextElementSibling.classList.remove("active");  
    this.classList.remove("arrow-active"); 
    toggle = !toggle;
  }
}

arrows.forEach(arrow => {
  arrow.addEventListener("click", display)
})