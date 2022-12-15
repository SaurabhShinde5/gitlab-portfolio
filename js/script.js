// scroll to top
const scrollBtn = document.querySelector(".scroll-top__btn");

const btnVisibility = () => {
  // console.log("in function");
  if (window.scrollY > 70) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.pointerEvents = "auto";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.pointerEvents = "none";
  }
};
document.addEventListener("scroll", () => {
  btnVisibility();
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//

// mobile view nav bar
const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
  const navBar = document.querySelector(".nav__list");

  if (menu.innerHTML.includes("☰")) {
    navBar.classList.add("responsive");
    document.querySelector(".menu-icon").innerHTML = "&times;";
  } else {
    navBar.classList.remove("responsive");
    document.querySelector(".menu-icon").innerHTML = "☰";
  }
});

//filter work section

const filterTags = document.querySelectorAll(".tag__item");
const cards = document.querySelectorAll(".card");

for (let filterTag of filterTags) {
  filterTag.addEventListener("click", function () {
    for (let tag of filterTags) {
      tag.classList.remove("active");
    }
    this.classList.add("active");

    const filterData = this.dataset.filter;
    for (let card of cards) {
      card.classList.add("hide-card");

      if (card.getAttribute("data-item") == filterData) {
        card.classList.remove("hide-card");
      } else if (filterData == "all") {
        card.classList.remove("hide-card");
      }
    }
  });
}

/***************** slider animation *****************/

const slide = () => {
  const sliderValue = slider.value;
  const clipPath = document.getElementById("sliding-img");
  clipPath.style.clipPath =
    "polygon(0 0," + sliderValue + "% 0," + sliderValue + "% 100%, 0 100%)";
};

const slider = document.getElementById("slider");
slider.addEventListener("input", slide);

/* magnifying image effect */

const zoom = document.getElementById("zoom-box");
zoom.addEventListener("mousemove", function (e) {
  let original = document.getElementById("main-img");
  let magnified = document.getElementById("large-img");
  let x = e.pageX - this.offsetLeft;
  let y = e.pageY - this.offsetTop;
  let imgWidth = original.width;
  let imgHeight = original.height;
  let xPercentage = (x / imgWidth) * 100;
  let yPercentage = (y / imgHeight) * 100;

  // background of the magnified image horizontal
  magnified.style.backgroundPositionX = xPercentage + "%";
  // // background of the magnified image vertical
  magnified.style.backgroundPositionY = yPercentage + "%";

  // Move the magnifying glass with the mouse movement.
  magnified.style.left = x - 50 + "px";
  magnified.style.top = y - 50 + "px";
});
