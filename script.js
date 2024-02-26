const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const phoneBtn = document.querySelector(".phone-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
};
cancelBtn.onclick = () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

let scrollTimeout;

window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    var currentScrollPos = window.pageYOffset;
    var contactRow = document.querySelector(".contact-row");
    if (currentScrollPos < 50) {
      contactRow.style.display = "block";
      navbar.style.top = "60px";
    } else {
      contactRow.style.display = "none";
      navbar.style.top = "0";
    }
  }, 100); // Adjust debounce delay as needed (in milliseconds)
};

//---------------------QUOTE REVIEWS --------------------// 
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = slider.clientWidth;
let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 1;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
