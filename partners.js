$(document).ready(function () {
    $('.part-slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      mobileFirst:true,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  $(document).ready(function () {
    $('.slider1').slick({
      arrows: false,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      mobileFirst:true,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  
  