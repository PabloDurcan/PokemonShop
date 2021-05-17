$('.slider').slick({
    arrows:false, dots: false, infinite:true, speed:400,
    autoplay:false, slidesToShow:1, slidesToScroll:1
  });
  //On click of slider-nav childern,
  //Slick slider navigate to the respective index.
  $('.slider-container > div').click(function() {
      $('.slider').slick('slickGoTo',$(this).index());
  })