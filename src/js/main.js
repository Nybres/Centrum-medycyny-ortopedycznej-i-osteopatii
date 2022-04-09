const navigation = document.querySelector(".navigation__nav");
const burgerBtn = document.querySelector(".burger-btn");

const handleNavigation = params => {
	navigation.classList.toggle("navigation__nav--active");
};

burgerBtn.addEventListener("click", handleNavigation);
