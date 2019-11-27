$('.jc_header').load("page/header.html");
$('footer').load("page/footer.html");
$('.jc_header').on("click","#button",function () {
    if($(".collect").css("display") == "none"){
        $(".collect").fadeIn();
        $('html,body').addClass('ovfHiden');
    }
    else{
        $(".collect").fadeOut();
        $('html,body').removeClass('ovfHiden');
    }

});
$(function () {

});


var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();