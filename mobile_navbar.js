$(document).ready(function() {
    $(".mobileNavBar_block .accordion").hide();
    $(".mobileNavBar_btn").click(function () {
      $(".mobileNavBar_block .accordion").slideToggle("slow").siblings(".mobileNavBar_block .accordion:visible").slideUp("slow");
      $(this).toggleClass("active");
    });
 
    $(".accordion .dropdown-content-mobile").hide();
    $(".accordion h3").click(function () {
      $(this).next(".dropdown-content-mobile").slideToggle("slow").siblings("dropdown-content-mobile:visible").slideUp("slow");
      $(this).toggleClass("active");
      $(this).siblings("h3").removeClass("active");
    });  
   }); 