const questionsContainer = document.querySelectorAll(".questions-container");
const questions = document.querySelectorAll(".questions");

function display(event) {
  console.log(event.target);
  const childrens = this.children;
  if(!childrens[2].classList.contains("active")) {
    childrens[0].classList.add("questions-active");
    childrens[2].classList.add("active");
    childrens[1].classList.add("arrow-active"); 
  } else {
    childrens[0].classList.remove("questions-active");
    childrens[2].classList.remove("active");  
    childrens[1].classList.remove("arrow-active"); 
}};

questionsContainer.forEach(container => {
  container.addEventListener("click", display)
})

function displayAccess(event){
  const childrens = (event.target.parentNode).children;
  if(!childrens[2].classList.contains("active")) {
    childrens[0].classList.add("questions-active");
    childrens[2].classList.add("active");
    childrens[1].classList.add("arrow-active"); 
  } else {
    childrens[0].classList.remove("questions-active");
    childrens[2].classList.remove("active");  
    childrens[1].classList.remove("arrow-active"); 
}
};

questions.forEach(question => {
  question.addEventListener("keydown", event => {
    if(event.key === " " || event.key === "Enter"){
      displayAccess(event)
  }})
})