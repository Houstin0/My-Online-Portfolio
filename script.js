document.addEventListener("DOMContentLoaded", function () {
  // Check if dark mode preference is stored in local storage
  const darkMode = localStorage.getItem("darkMode");

  // If dark mode is enabled, add the 'dark-mode' class to the body
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Toggle dark mode on button click
  const darkModeIcon = document.getElementById("darkMode-icon");
  darkModeIcon.addEventListener("click", function () {
    // Toggle the 'dark-mode' class on the body
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");

    // Store the user's dark mode preference in local storage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // menu icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".nav-bar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // scroll sections active link
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
    // sticky navbar
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);

    //remove menu icon navbar when click navbar link(scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };

  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // scroll reveal

  // ScrollReveal({
  //     reset: true,
  //     distance: '80px',
  //     duration: 2000,
  //     delay: 200
  // });

  // ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  // ScrollReveal().reveal('.home-img img , .services-container, .portfolio-box, .testimonial-wrapper, .contact form ', { origin: 'bottom' });


  
});
