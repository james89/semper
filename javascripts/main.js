$(function(){

  //for background slideshow
  $.vegas('slideshow', {
    delay:12000,
    backgrounds:[
      { src:'img/bg1.png', fade:2000 },
      { src:'img/bg2.png', fade:2000 }
    ]
  })('overlay');

  // for contact form
  $('.required-icon').tooltip({
    placement: 'left',
    title: 'Required field'
    });



});
