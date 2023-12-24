$(document).ready(function () {
    $('.slider').slick( {
        adaptiveHeight: true,
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        draggable: false,
        responsive:[
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1
                }
            }
            
        ]
    })
   
});