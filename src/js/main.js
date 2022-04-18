const nav = document.querySelector(".navbar__container");
const subMenu = document.querySelector(".navbar__sub-menu");
const burgerBtn = document.querySelector(".burger-btn");
const burgerBrnBars = document.querySelector(".burger-btn__box-bars");
const dropDownMenu = document.querySelector(".navbar__links-dropdown");
const dropdownArrow = document.querySelector(".navbar__link-icon");

const handleNavigation = () => {
	burgerBrnBars.classList.toggle("burger-btn__box-bars--active");
	nav.classList.toggle("navbar__container--active");
	navigationBox.classList.toggle("navbar__box--active");

	navigationLinks.forEach(link => {
		link.addEventListener("click", () => {
			// navigation.classList.remove("navigation__links--active");
			// burgerBrnBars.classList.remove("burger-btn__box-bars--active");
		});
	});
};

const dropMenu = () => {
	subMenu.classList.toggle("navbar__sub-menu--active");
};

burgerBtn.addEventListener("click", handleNavigation);
dropdownArrow.addEventListener("click", dropMenu);
