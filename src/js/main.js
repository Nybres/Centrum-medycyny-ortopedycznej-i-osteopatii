const nav = document.querySelector(".navbar__container");
const subMenu = document.querySelector(".navbar__sub-menu");
const burgerBtn = document.querySelector(".burger-btn");
const burgerBrnBars = document.querySelector(".burger-btn__box-bars");
const dropdownArrow = document.querySelector(".navbar__link-icon");
const navigationLinks = document.querySelectorAll(".navbar__menu-item");
const navigationSubLinks = document.querySelectorAll(".navbar__sub-item");

const questionContainer = document.querySelectorAll(".faq__rectangle");

const handleNavigation = () => {
	burgerBrnBars.classList.toggle("burger-btn__box-bars--active");
	nav.classList.toggle("navbar__container--active");

	navigationLinks[1].addEventListener("click", () => {
		subMenu.classList.toggle("navbar__sub-menu--active");
	});

	document.body.classList.toggle("active");
};

const handleAccordion = e => {
	questionContainer.forEach(question => {
		question.addEventListener("click", e => {
			const answer = question.querySelector(".faq__answer");
			const icon = question.querySelector(".faq__question-icon");
			const answerText = answer.firstChild.nextElementSibling;
			answer.classList.toggle("faq__answer--active");
			answerText.classList.toggle("faq__answer-text--active");
			icon.classList.toggle("faq__question-icon--active");

			console.log(icon);
		});
	});
};
handleAccordion();
burgerBtn.addEventListener("click", handleNavigation);
