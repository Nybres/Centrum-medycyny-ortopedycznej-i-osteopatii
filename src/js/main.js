const navigation = document.querySelector(".navigation__nav");
const navigationLinks = document.querySelectorAll(".navigation__link");
const navigationDrop = document.querySelector(".navigation__nav-drop");
const navigationDropdownIcon = document.querySelector(".navigation__link-icon");
const burgerBtn = document.querySelector(".burger-btn");
const burgerBrnBars = document.querySelector(".burger-btn__box-bars");

const handleNavigation = params => {
	burgerBrnBars.classList.toggle("burger-btn__box-bars--active");
	navigation.classList.toggle("navigation__nav--active");
};

const tests = params => {
	navigationDrop.classList.toggle("navigation__nav-drop--active");
};

burgerBtn.addEventListener("click", handleNavigation);
navigationDropdownIcon.addEventListener("click", tests);
