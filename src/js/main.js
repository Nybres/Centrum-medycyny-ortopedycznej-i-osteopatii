const nav = document.querySelector(".navbar__container");
const subMenu = document.querySelector(".navbar__sub-menu");
const burgerBtn = document.querySelector(".burger-btn");
const burgerBrnBars = document.querySelector(".burger-btn__box-bars");
const dropdownArrow = document.querySelector(".navbar__link-icon");
const navigationLinks = document.querySelectorAll(".navbar__menu-item");
const navigationSubLinks = document.querySelectorAll(".navbar__sub-item");

const handleNavigation = () => {
	burgerBrnBars.classList.toggle("burger-btn__box-bars--active");
	nav.classList.toggle("navbar__container--active");

	navigationLinks[1].addEventListener("click", () => {
		subMenu.classList.toggle("navbar__sub-menu--active");
	});

	document.body.classList.toggle("active");
};

burgerBtn.addEventListener("click", handleNavigation);
