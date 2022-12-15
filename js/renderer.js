const addNavItem = (navItem) => {
  const newNavItem = document.createElement("a");
  newNavItem.setAttribute("href", `${navItem.link}`);
  newNavItem.classList.add("nav__item");
  newNavItem.innerHTML = `${navItem.title}`;
  _navList.append(newNavItem);
};
//
const addEducation = (educationCard) => {
  const newEducation = document.createElement("div");
  newEducation.classList.add("education__card");
  newEducation.innerHTML = `
  <h3 class="card__title">${educationCard.title}</h3>
  <p class="card__subtitle">${educationCard.subtitle}</p>
  <p class="card__description">${educationCard.description}</p>`;
  _educationContent.append(newEducation);
};
