// Nav Open and Close Menu Function

let btn = document.querySelector(".nav-toggle");
let mobile = document.querySelector(".mobile");

btn.addEventListener("click", increaseNavHeight);

function increaseNavHeight() {
  let visibility = mobile.getAttribute("data-visible");
  if (visibility === "false") {
    mobile.setAttribute("data-visible", true);
  } else {
    mobile.setAttribute("data-visible", false);
  }
}

// Side Sliding Functionality

let boxes = document.querySelectorAll(".sliders");

window.addEventListener("scroll", showContent);

function showContent() {
  const triggerBottom = (window.innerHeight / 7) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("sliding");
    } else {
      box.classList.remove("sliding");
    }
  });
}

//Click show tab content // Auto Slider

let tabs = document.querySelectorAll(".tabs");
let tabContents = document.querySelectorAll(".testimonials-items");

tabs.forEach((tab) => {
  tab.addEventListener("click", changeContent);
});

function changeContent() {
  removeBg();
  this.classList.add("white-bg");
  let content = document.querySelector(`#${this.id}-content`);
  content.classList.add("testimonials-tab-content-show");
}

function removeBg() {
  tabs.forEach((tab) => {
    tab.classList.remove("white-bg");
  });
  tabContents.forEach((contents) =>
    contents.classList.remove("testimonials-tab-content-show")
  );
}

// Carousel Slider Functionality

function Carousel() {
  let prevBtn = document.querySelector(".prev-btn");
  let nextBtn = document.querySelector(".next-btn");
  let sliderImageCon = document.querySelector(".slider-image-con");
  let sliderChildren = sliderImageCon.children;
  let childrenLength = sliderChildren.length;

  let counter = 0;

  prevBtn.addEventListener("click", () => showContent("prev"));
  nextBtn.addEventListener("click", () => showContent("next"));

  function showContent(direction) {
    if (direction === "next") {
      counter++;
      if (counter === childrenLength) {
        counter = 0;
      }
    } else {
      if (counter === 0) {
        counter = childrenLength - 1;
      } else {
        counter--;
      }
    }
    for (let i = 0; i < sliderChildren.length; i++) {
      sliderChildren[i].classList.remove("show");
    }
    sliderChildren[counter].classList.add("show");
  }
}
Carousel();
