const navigation = document.querySelector(".navigation__links");
const navigationLinks = document.querySelectorAll(".navigation__link");
const navigationBox = document.querySelector(".navigation__box")
const burgerBtn = document.querySelector(".burger-btn");
const burgerBrnBars = document.querySelector(".burger-btn__box-bars");
const dropDownMenu = document.querySelector(".navigation__links-dropdown");
const dropdownArrow = document.querySelector(".navigation__link-icon");

const handleNavigation = () => {
	burgerBrnBars.classList.toggle("burger-btn__box-bars--active");
	navigation.classList.toggle("navigation__links--active");
	navigationBox.classList.toggle("navigation__box--active")

	navigationLinks.forEach(link => {
		link.addEventListener("click", () => {
			// navigation.classList.remove("navigation__links--active");
			// burgerBrnBars.classList.remove("burger-btn__box-bars--active");
		});
	});
};

const dropMenu = () => {
	dropDownMenu.classList.toggle("navigation__links-dropdown--active");
};

burgerBtn.addEventListener("click", handleNavigation);
dropdownArrow.addEventListener("click", dropMenu);
