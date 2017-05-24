
$(document).ready(function () {

  $('.responsive_carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });


});

//Matches the height of all the boxes in the row according to the tallest/longest text 
$(function() {
    $('.review_container').matchHeight({
        byRow: true
    });
});

$('.close').click(function () {
 $('.modal .carousel .item').html($('.modal .carousel .item').html());
  
});

$('.modal').on('hidden.bs.modal', function (e) {
  // do something...
  $('.modal .carousel .item').html($('.modal .carousel .item').html());
});









