$(window).scroll(()=>{
	var windowTop = $(window).scrollTop();
	windowTop > 70 ? $('#scroll-nav').removeClass('trans-back') : $('#scroll-nav').addClass('trans-back');


});


$('nav ul>li>a[href*="#"]').on('click', function(e){
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 65
    },500);
    e.preventDefault();
});


/*
$(function(){
  $('.group').on('mouseover',function(){
    $('.main-image').css({'background':'url(img/web.jpg)','background-position':'top center','background-size':'cover'});
  });
  $('.group').on('mouseleave',function(){
    $('.main-image').css({'background':'','background-position':'','background-size':''});
  });
});*/
