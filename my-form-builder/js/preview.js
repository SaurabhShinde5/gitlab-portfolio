const previewLogo = new Logos();
let parsedLogo = previewLogo.getLogosFromLocalStorage();
//
const bannerDisplay = parsedLogo.banner;
if (bannerDisplay.url) {
  renderBanner(bannerDisplay);
}

//
const headerLogos = parsedLogo.header;
renderLogoInSection(headerLogos, "header");

const footerLogos = parsedLogo.footer;
renderLogoInSection(footerLogos);
//

const formJson = localStorage.getItem("formData");
const formArray = JSON.parse(formJson);
formArray.forEach(renderForm);
