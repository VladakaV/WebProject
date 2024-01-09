<template>
    <div class="mobileNavBar_block">
      <div class="accordion">
        <h3><a href="" title="Drupal support">ПОДДЕРЖКА DRUPAL</a></h3>
        <h3 class="accordion">АДМИНИСТРИРОВАНИЕ◿</h3>
        <div class="dropdown-content-mobile ">
          <h5><a class="drop_a_1-m py-1" href="#">МИГРАЦИЯ</a></h5>
          <div>
            <h5><a class="drop_a_2-m py-1" href="#">БЭКАПЫ</a></h5>
          </div>
          <h5><a class="drop_a_3-m py-1" href="#">ОПТИМИЗАЦИЯ</a></h5>
        </div>
        <h3><a href="" title="Blog">БЛОГ</a></h3>
        <h3><a href="l" title="SEO promotion">РЕКЛАМА</a></h3>
        <h3><a href="" title="About">О НАС</a></h3>
        <h3><a href="#customers" title="Customers">ПРОЕКТЫ</a></h3>
        <h3><a href="#contacts" title="Contacts">КОНТАКТЫ</a></h3>
      </div>
      <div class="mobileNavBar_sidebar d-flex justify-content-between">
        <div class="mobileNavBar_logo pt-2">
          <div class="mobileNavBar_logo_wrapper">
            <img id="" src="../img/drupal-coder.svg" alt="drupal-coder" />
          </div>
  
        </div>
        <div class="mobileNavBar_btn mb-1 px-2">≡</div>
      </div>
    </div>
  </template>
  
  <script>
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
  </script>
  
  <style>
  
  /* mobile-menu */
  
  .mobileNavBar_block {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background-color: rgb(58, 58, 58);
    display: none;
  }
  
  .mobileNavBar_btn {
    position: relative;
    color: #151618;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    height: 90%;
  }
  
  .mobileNavBar_logo {
    position: relative;
  }
  
  @media screen and (max-width: 575px) {
    .navBar_block {
      display: none;
    }
  
    .mobileNavBar_block {
      display: block;
    }
  }
  
  .dropdown-content-mobile {
    border-left: solid 1px #151618;
    border-right: solid 1px #151618;
    border-top: solid 1px #151618;
  }
  
  .dropdown-content-mobile a {
    display: block;
    padding-left: 30px;
  }
  
  .dropdown-content-mobile div {
    border-top: dashed 1px #151618;
    border-bottom: dashed 1px #151618;
  }
  
  .dropdown-content-mobile h5 {
    margin: 0;
  }
  
  /* mobile-menu accordion */
  
  
  
  .mobileNavBar_block .accordion {
    width: 100%;
    border-bottom: solid 1px #151618;
  }
  
  .mobileNavBar_block .accordion a {
    color: #151618;
  }
  
  .mobileNavBar_block .accordion h3 {
    background: rgb(58, 58, 58);
    padding: 7px 15px;
    margin: 0;
    font: bold 120%/100% Arial, Helvetica, sans-serif;
    border: solid 1px #151618;
    border-bottom: none;
    cursor: pointer;
    color: #151618;
  }
  
  .mobileNavBar_block h3.accordion.active {
    box-shadow: 0px 2px 10px #151618;
  }
  
  /* Dropdown menu */
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 0;
  }
  
  
  
  .dropdown-content a {
    background-color: coral;
    padding: 0 5px;
    display: block;
    color: black;
    transform-origin: 0 0;
  }
  
  
  .drop_a_1 {
    transform: scaleY(0);
    transition: transform 0.15s 0.3s;
  }
  
  .drop_a_2 {
    transform: scaleY(0);
    transition: transform 0.15s 0.15s;
  }
  
  .drop_a_3 {
    transform: scaleY(0);
    transition: transform 0.15s;
  }
  
  
  .dropdown:hover .drop_a_1 {
    transform: scaleY(1);
    transition: transform 0.15s;
  }
  
  .dropdown:hover .drop_a_2 {
    transform: scaleY(1);
    transition: transform 0.15s 0.15s;
  }
  
  .dropdown:hover .drop_a_3 {
    transform: scaleY(1);
    transition: transform 0.15s 0.3s;
  }
  
  
  
  
  
  </style>