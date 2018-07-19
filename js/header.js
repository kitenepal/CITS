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


$('.nav-serv .course').on('click', function(e){
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 20
    },500);
    e.preventDefault();
});
