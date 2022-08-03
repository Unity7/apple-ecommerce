//Cube

const cube = document.querySelector(".cube");
let cubeY = 0;
const playPause = () => {
  setInterval(() => {
    cube.style.transform = `rotateY(${cubeY++}deg)`;
  }, 100);
};

playPause();
//slideshow

const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};

let bgcounter = 1;

slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");

const slideshow = () => {
  setInterval(() => {
    bgcounter++;
    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");

    if (bgcounter < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      bgcounter = 1;
    }
  }, 10000);
};

slideshow();
