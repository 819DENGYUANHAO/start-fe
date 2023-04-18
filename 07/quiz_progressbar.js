const progressEl = document.querySelector("#progress");

let percent = 0;
let direction = 1;

const animateProgress = () => {
  if (percent >= 100 || percent <= 0) {
    direction = -direction;
  }

  
 
  percent += direction;
progressEl.style.width = percent + "%";
};
setInterval(animateProgress, 100);