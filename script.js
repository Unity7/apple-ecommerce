//Cube

const cube = document.querySelector(".cube");
let y = 20;
let x = 0;
let z = 0;
let bool = true;
let interval;

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg) `;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg) `;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
});

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});
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

// End of Slideshow

//Section 3
const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  //Check where in the page the user is at by comparing the innerHeight of the current window to the top of the window
  if (
    //Check how far from the top user has scrolled plus the height of the view window
    //pageYOffset checks the distance scrolled from the top of the screen
    //innerHeight height of the window's layout viewport
    window.pageYOffset + window.innerHeight >=
    //If distance from top of screen is greater or equal to the sum of the distance from Section3Content and the view window heigh then the user has scrolled into section 3 view
    //offsetTop returns the distance of the outer border of the current element relative to the inner border of the top of the offset Parent
    //offsetHeight returns the height of an element
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});

//End of Section 3
