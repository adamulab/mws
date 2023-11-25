let navbar = document.querySelector(".header .navbar");
let authForm = document.querySelector(".auth-form");
let registerBtn = document.querySelector(".auth-form .register-btn");
let loginBtn = document.querySelector(".auth-form .login-btn");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

document.querySelector("#account-btn").onclick = () => {
  authForm.classList.add("active");
};

document.querySelector("#close-auth-form").onclick = () => {
  authForm.classList.remove("active");
};

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  document.querySelector(".auth-form .login-form").classList.remove("active");
  document.querySelector(".auth-form .register-form").classList.add("active");
};

loginBtn.onclick = () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  document.querySelector(".auth-form .login-form").classList.add("active");
  document
    .querySelector(".auth-form .register-form")
    .classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  loopedSlides: 50,
  grabCursor: true,

  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".courses-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

let accordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

// Accodion
accordion.forEach((accord) => {
  accord.onclick = () => {
    accord.classList.toggle("active");
  };
});

// Load more button
document.querySelector(".load-more .btn").onclick = () => {
  document
    .querySelectorAll(".courses .courses-box-container .hide")
    .forEach((show) => {
      show.style.display = "block";
    });

  document.querySelector(".load-more .btn").style.display = "none";
};
