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
