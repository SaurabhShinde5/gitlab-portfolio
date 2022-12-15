const navigation = new Navigation(navItems);

const navList = navigation.getNavItems();

const _navList = document.querySelector(".nav__list");
navList.forEach(addNavItem);

//
const education = new Education(educationCards);
const educationCardList = education.getEducationCard();
const _educationContent = document.querySelector(".education__content");
educationCardList.forEach(addEducation);
