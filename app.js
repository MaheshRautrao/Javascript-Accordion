const Li = document.querySelectorAll(".question");

for (var i = 0; i < Li.length; i++) {
  Li[i].addEventListener("click", showAns);
}

function showAns(e) {
  const ele = e.currentTarget;
  ele.parentElement.classList.toggle("show_ans");
  ele.querySelector("i").classList.toggle("rotate");
}
