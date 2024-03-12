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



// js code for the review slider in the quote area

document.addEventListener("DOMContentLoaded", function() {
  // Testimonial Data
  const testimonials = [
    {
      name: "Eva S.",
      testimonial:
        "We've been working with locksmith for the past 15 years. The staff are always prompt and courteous and the work is always dont to our complete satisfaction.",
    },
    {
      name: "Katey T.",
      testimonial:
        "I recommend locksmith to all the new tenants in my building. The service is fast, reliable and well priced. No complaints, ever.",
    },
    {
      name: "Jae R.",
      testimonial:
        "As an office manager, I can wholeheartedly recommend locksmith. I have more than 100 locks in my office, and locksmith has never ever let me down.",
    },
  ];

  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;

  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");

  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
    testimonialContainer.classList.remove("slide-up");
    void testimonialContainer.offsetWidth; // Trigger reflow
    testimonialContainer.classList.add("slide-up");
  });

  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
    testimonialContainer.classList.remove("slide-up");
    void testimonialContainer.offsetWidth; // Trigger reflow
    testimonialContainer.classList.add("slide-up");
  });

  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };

  window.onload = displayTestimonial;
});


let scrollTimeout;

window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    var currentScrollPos = window.pageYOffset;
    var contactRow = document.querySelector(".contact-row");
    var screenWidth = window.innerWidth; // Get the screen width

    if (screenWidth > 860) { // Only execute this code if screen width is greater than 860px
      if (currentScrollPos < 50) {
        contactRow.style.display = "block";
        navbar.style.top = "60px";
      } else {
        contactRow.style.display = "none";
        navbar.style.top = "0";
      }
    }
  }, 10);
};