$(document).ready(function () {
    $('.slider').slick( {
        adaptiveHeight: true,
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        dots: false,
        responsive:[
            {
                breakpoint:576,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1
                }
            }
            
        ]
    })
   
});