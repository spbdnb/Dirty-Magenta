$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop : true,
    responsiveClass : true,
    responsive : {
        0 : {
            items : 1,
            nav : true
        }
    },
    navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    autoplay: true,
    autoplayTimeout: 5000
  });
});
