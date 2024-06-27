//Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').addClass('button-show');
        $('.main-header').addClass('sticky');
    } else {
        $('.scrollToTop').removeClass('button-show');
        $('.main-header').removeClass('sticky');
    }
});

function isScrolledDown() {
    // Get the vertical scroll position of the page
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Check if the scroll position is greater than or equal to 250px
    return scrollTop >= 100;
  }
  
// Example usage:
if (isScrolledDown()) {
    $('.main-header').addClass('sticky');
} else {
    $('.main-header').removeClass('sticky');
}

// New Arrival Carousel
var newArrival = new Swiper(".new-arrival-carousel", {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        575: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
});

// Products Common Carousel
var productsCarousel = new Swiper(".products-carousel", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        575: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
});



