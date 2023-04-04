const questionContainer = document.querySelectorAll(".faq__rectangle");
const handleAccordion = e => {
  questionContainer.forEach(question => {
    question.addEventListener("click", e => {
      const answer = question.querySelector(".faq__answer");
      const icon = question.querySelector(".faq__question-icon");
      const answerText = answer.firstChild.nextElementSibling;
      answer.classList.toggle("faq__answer--active");
      answerText.classList.toggle("faq__answer-text--active");
      icon.classList.toggle("faq__question-icon--active");
    });
  });
};
handleAccordion();

const navBtn = document.querySelector(".navbar__hamburger");
const submenuBtn = document.querySelector(".navbar__navigation-link--flex");
const navigation = document.querySelector(".navbar__navigation");
const subNavigation = document.querySelector(".navbar__navigation-submenu");
const submenuBackArrow = document.querySelector(".navbar__submenu-back-arrow");
const body = document.querySelector("body");
const navMobileCtaBtn = document.querySelector(".navbar__contact-btn--mobile");
const navSocialsBox = document.querySelector(".navbar__socials--mobile");

const hideBody = params => {
  body.classList.toggle("body-hide");
};

const handleNav = params => {
  navigation.classList.toggle("navbar__navigation--active");
  subNavigation.classList.remove("navbar__navigation-submenu--active");
  navMobileCtaBtn.style.display = "block";
  navSocialsBox.style.display = "block";
  hideBody();
};

const handleSubmenu = params => {
  subNavigation.classList.toggle("navbar__navigation-submenu--active");
  navMobileCtaBtn.style.display = "none";
  navSocialsBox.style.display = "none";
};

const handleBack = params => {
  handleSubmenu();
  // hideBody();
  body.classList.add("body-hide");
  navMobileCtaBtn.style.display = "block";
  navSocialsBox.style.display = "block";
};

navBtn.addEventListener("click", handleNav);
submenuBtn.addEventListener("click", handleSubmenu);
submenuBackArrow.addEventListener("click", handleBack);
