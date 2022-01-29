"use strict";
window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menuBtn = document.querySelector(".menu__btn");
  const navigation = document.querySelector(".nav");
  const navItems = document.querySelectorAll(".nav a");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });

  const scrollBtn = document.querySelector(".scrolltopp-btn");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 400);
    // console.log("hg g ");
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })
});







//   window.addEventListener("scroll", () => {
//     let reveals = document.querySelectorAll(".reveal");

//     // console.log("swsccde");
//     for (let i = 0; i < reveals.lenght; i++) {
//       let windowHeight = window.innerHeight;
//       let revealTop = reveals[i].getBoundingClientRect().top;
//       let revealPoint = 50;

//       if (revealTop < windowHeight - revealPoint) {
//         reveals[i].classList.add("active");
//         console.log("boldii");
//       }
//     }
//   });
//   window.addEventListener('scroll', () => {
//     let reveals = document.querySelectorAll('.reveal')

//     for(let i = 0; i< reveals.length; i++) {
//       let windowHeight = window.innerHeight;
//       let revealTop = reveals[i].getBoundingClientRect().top;
//       let revealPoint = 50;

//       if(revealTop < windowHeight - revealPoint) {
//         reveals[i].classList.add('active')
//       }
//     }
//   })