const _previewHeader = document.querySelector(".preview-header");
const _previewFooter = document.querySelector(".preview-footer");
const _formBanner = document.querySelector(".form__banner");

//

const renderLogoInSection = (sectionLogos, section) => {
  const positions = Array(3).fill({ isImg: false, id: 0 });
  sectionLogos.forEach((item, index) => {
    positions[section ? item.id : item.id - 3] = { isImg: true, id: index };
  });
  positions.forEach((position) => {
    if (position.isImg) {
      const newImage = document.createElement("img");
      newImage.classList.add("logo-img");
      newImage.src = sectionLogos[position.id].url;
      section === "header"
        ? _previewHeader.append(newImage)
        : _previewFooter.append(newImage);
    } else {
      const newDiv = document.createElement("div");
      section === "header"
        ? _previewHeader.append(newDiv)
        : _previewFooter.append(newDiv);
    }
  });
};

const renderBanner = (bannerDisplay) => {
  const bannerImage = document.createElement("img");
  bannerImage.classList.add("banner--display");
  bannerImage.src = bannerDisplay.url;
  _formBanner.append(bannerImage);
};

//render form
const renderForm = (formObject) => {
  const previewedForm = document.querySelector(".previewedForm");
  const newLabel = document.createElement("label");
  newLabel.textContent = `${formObject.name}`;
  newLabel.for = `${formObject.name}`;
  const newInput = document.createElement("input");
  newInput.type = `${formObject["input-type"]}`;
  newInput.id = `${formObject.name}`;
  newInput.placeholder = `${formObject.place}`;
  if (formObject["input-required"]) {
    newInput.setAttribute("required", "");
  }
  previewedForm.append(newLabel);
  previewedForm.append(newInput);
};
