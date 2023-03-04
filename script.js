const hamburgerBtn = document.querySelector(`[data-hamburger-menu]`);
const navMobileContainer = document.querySelector(`[data-nav-container]`);
const body = document.querySelector("body");
const mobileGroupBtn = document.querySelector(".slider__arrow--mobile");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.children[0].toggleAttribute("data-display-hidden");
  hamburgerBtn.children[1].toggleAttribute("data-display-hidden");
  navMobileContainer.classList.toggle("active");
  body.classList.toggle("remove-scrolling");
  mobileGroupBtn.classList.toggle("mobileBntZed");
});

const carouselBtns = document.querySelectorAll(`[data-carousel-button]`);

carouselBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const carouselParent = button.closest(`[parent-carousel]`);

    const activeSlide = carouselParent.querySelector(`[data-active]`);

    let newIdx = [...carouselParent.children].indexOf(activeSlide) + offset;
    console.log(newIdx);

    if (newIdx < 0) newIdx = carouselParent.children.length - 1;
    if (newIdx >= carouselParent.children.length) newIdx = 0;

    carouselParent.children[newIdx].dataset.active = true;
    delete activeSlide.dataset.active;
    if (button.dataset.carouselButton == "next") console.log("right");
    else console.log("left");
  });
});
