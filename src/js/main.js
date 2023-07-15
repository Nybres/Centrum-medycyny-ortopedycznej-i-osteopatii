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

//

const accordions = document.querySelectorAll(".profit__accordion");
if (accordions) {
  accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
      const accordionContent = accordion.querySelector(
        ".profit__accordion-content"
      );
      if (!accordion.classList.contains("show")) {
        accordion.classList.add("show");
        slideDown(accordionContent);
      } else {
        accordion.classList.remove("show");
        slideUp(accordionContent);
      }
    });
  });
}

//
const profitListElements = document.querySelectorAll(".leeaches__profit");

const handleShow = element => {
  const profitList = element.querySelector(".leeaches__profit-list");
  const overlay = element.querySelector(".leeaches__profit-overlay");
  const profitBtn = element.querySelector(".leeaches__profit-btn");

  if (profitList.classList.contains("leeaches__profit-list--show")) {
    profitList.classList.remove("leeaches__profit-list--show");
    overlay.classList.remove("leeaches__profit-overlay--show");
    profitList.style.maxHeight = "";
    profitBtn.textContent = "Zobacz więcej";
  } else {
    profitList.classList.add("leeaches__profit-list--show");
    overlay.classList.add("leeaches__profit-overlay--show");
    profitList.style.maxHeight = profitList.scrollHeight + "px";
    profitBtn.textContent = "Zwiń";
  }
};

if (profitListElements) {
  profitListElements.forEach(element => {
    const profitBtn = element.querySelector(".leeaches__profit-btn");
    profitBtn.addEventListener("click", e => {
      handleShow(element);
    });
  });
}

//
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
