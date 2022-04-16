// let spacer = getComputedStyle(document.documentElement).getPropertyValue('--test')


let roadSlider = new Swiper(".roadmap-section__box", {
    slidesPerView: 4,
    spaceBetween: 70,
    // loop: true,
    // speed: 8000,
    // autoplay: {
    //   delay: 0,
    // },
    navigation: {
      nextEl: ".roadmap-section__prev",
      prevEl: ".roadmap-section__next"


    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //   },
    //   576: {
    //     slidesPerView: 4,
    //     spaceBetween: 15,
    //   },
    //   768: {
    //     slidesPerView: 5,
    //     spaceBetween: 15,
    //   },
    // },
});




// init sliders

// (function () {
//   "use strict";
//   const breakpoint = window.matchMedia("(min-width:1024px)");
//   let slider;

//   const breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (slider !== undefined)
//       slider.destroy(true, true);

//       return;
//     } else if (breakpoint.matches === false) {
//       return enableSwiper();
//     }
//   };
//   const enableSwiper = function () {
//     slider = new Swiper(".index-logo__slider", {
//       slidesPerView: 'auto',
//       spaceBetween: 70,
//       loop: true,
//       speed: 8000,
//       autoplay: {
//         delay: 0,
//       },
//       // pagination: {
//       //   el: ".swiper-pagination",
//       // },
//       // breakpoints: {
//       //   320: {
//       //     slidesPerView: 3,
//       //     spaceBetween: 10,
//       //   },
//       //   576: {
//       //     slidesPerView: 4,
//       //     spaceBetween: 15,
//       //   },
//       //   768: {
//       //     slidesPerView: 5,
//       //     spaceBetween: 15,
//       //   },
//       // },
//     });
//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();


// закрытие по клику вне окна
// if (overlay) {
//   overlay.addEventListener('click', function(e) {
//     e.stopPropagation();
//     let curentTargetWrapper = document.querySelector('.modal-wrapper')
//     if (event.target === curentTargetWrapper) {
//       overlay.classList.remove('active');
//     }
//   })
// }
// // закрытие по Escape
// document.addEventListener('keydown', function(e) {
// 	if( e.keyCode == 27 ){
// 		overlay.classList.remove('active');
// 	}
// });

let singleSliderBottom = new Swiper(".mini-slider", {
  slidesPerView: 5,
  spaceBetween: 3,
  watchSlidesProgress: true,
  slideToClickedSlide: false,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 4,
  //     spaceBetween: 10,
  //   },
  //   576: {
  //     slidesPerView: 3,
  //     spaceBetween: 15,
  //   },
  //   1240: {
  //     slidesPerView: "auto",
  //     spaceBetween: 15,
  //   },
  // },
});

let singleSliderTop = new Swiper(".big-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  thumbs: {
    swiper: singleSliderBottom,
  },
  // navigation: {
  //   nextEl: ".single-card__slider-next",
  //   prevEl: ".single-card__slider-prev",
  // },
});


