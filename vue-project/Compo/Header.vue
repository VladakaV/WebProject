<template>
    <header>
      <div class="header_block pb-5">
        <div class="navBar_block container pt-5">
          <div class="d-flex justify-content-between align-items-center">
            <div class="logo">
              <img id="logo" src= "../../image_resources/drupal-coder.svg" alt="drupal-coder" />
            </div>
            <div class="nav_bar p-2">
              <div class="d-flex justify-content-around px-2">
                <div class="px-2 flex-fill">
                  <a href="" title="Drupal support">DRUPAL SUPPORT</a>
                </div>
                <div class="dropdown_main px-2 flex-fill">
                  <div class="dropdown">
                    <p class="m-0">WEB SERVER ADMINISTRATION◿</p>
                    <div class="dropdown-content ">
                      <a class="drop_a_1" href="#">Migration</a>
                      <a class="drop_a_2" href="#">Backups</a>
                      <a class="drop_a_3" href="#">Optimization</a>
                    </div>
                  </div>
                </div>
                <div class="px-2 flex-fill">
                  <a href="" title="Blog">BLOG</a>
                </div>
                <div class="px-2 flex-fill">
                  <a href="" title="SEO promotion">SEO PROMOTION</a>
                </div>
                <div class="px-2 flex-fill">
                  <a href="" title="About">ABOUT</a>
                </div>
                <div class="px-2 flex-fill">
                  <a href="#customers" title="Customers">CUSTOMERS</a>
                </div>
                <div class="px-2 flex-fill">
                  <a href="#contacts" title="Contacts">CONTACTS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="otherHeader_block">
          <video autoplay muted loop class="header_video w-100">
            <source src="" type="video/mp4">
          </video>
          <div class="content container">
            <div class="d-flex flex-wrap pt-5">
              <div class="drupal_development col-md-6 col-6 py-4">
                <h1 class="m-0">Drupal <br> development</h1>
                <div class="m-1"> Development and support of <br> Drupal-powered websites since 2005</div>
                <a href="#tariff_block" class="btn m-1">Plans</a>
              </div>
              <div class="achivments col-md-6 d-flex flex-column py-4">
                <div class="achivments_first_row d-flex">
                  <div class="col-4 achivment_wrapper">
                    <div class="achivment_title">
                      #1
                      <img src="../../image_resources/cup.png" alt="cup">
                    </div>
                    <div class="achivment_description">
                      Drupal developer <br> in the Runet Rating
                    </div>
                  </div>
                  <div class="col-4 achivment_wrapper">
                    <div class="achivment_title">
                      3+
                    </div>
                    <div class="achivment_description">
                      our specialists have 3+<br>
                      years of Drupal<br>
                      experience<br>
                      on average
                    </div>
                  </div>
                  <div class="col-4 achivment_wrapper">
                    <div class="achivment_title">
                      18
                    </div>
                    <div class="achivment_description">
                      years of Drupal-related<br>
                      experience
                    </div>
                  </div>
                </div>
                <div class="achivments_second_row d-flex">
                  <div class="col-4 achivment_wrapper">
                    <div class="achivment_title">
                      50
                    </div>
                    <div class="achivment_description">
                      DrupalGive themes<br>
                      and modules
                    </div>
                  </div>
                  <div class="col-4 achivment_wrapper">
                    <div class="achivment_title">
                      90 000+
                    </div>
                    <div class="achivment_description">
                      hours supporting<br>
                      Drupal-powered sites
                    </div>
                  </div>
                  <div class="col-4 achivment_wrapper">
                    <div class="achivment_title">
                      300+
                    </div>
                    <div class="achivment_description">
                      sites on support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
  
  }
  
  </script>
  
  <style>
  body {
    font-family: "Montserrat";
  }

  header,
  .nav_bar a {
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  
  .achivment_title img {
    width: 20px;
  }
  
  .btn {
    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 5px;
    border-color: coral;
  }
  
  .btn:hover {
    background-color: coral;
  }
  
  .header_logo {
    height: 700px;
    position: absolute;
    top: -200px;
    left: -200px;
    z-index: -1;
  }
  
  
  /* background video */
  
  .header_block {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  
  .header_video {
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    display: inline-block;
    vertical-align: baseline;
    z-index: -10;
    filter: blur(5px);
    filter: brightness(25%);
  }
  
  .achivment_wrapper {
      border-left-style: solid;
      border-left-color: coral;
      border-left-width: 2px;
      margin: 3px;
  }
  
  .achivment_title {
      font-size: 15px;
  }
  
  
  
  </style>