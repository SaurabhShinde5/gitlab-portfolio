const images = document.querySelectorAll(".sliding-img");
const dots = document.querySelectorAll(".dot");
let imageNumber = 0;

const currentImage = (n) => {
  viewImage((imageNumber = n));
};

const viewImage = (n) => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dots[i].style.background = "transparent";
  }
  imageNumber++;
  if (imageNumber > images.length) {
    imageNumber = 1;
  }
  if (n < 1) {
    imageNumber = images.length;
  }
  images[imageNumber - 1].style.display = "flex";
  dots[imageNumber - 1].style.background = "white";

  setTimeout(viewImage, 4000);
};
viewImage();
