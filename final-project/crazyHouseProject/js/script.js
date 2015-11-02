console.log('hello');

//events slider

$('.events__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  cssEase: 'linear'
});

//form validation
$('form').validate();