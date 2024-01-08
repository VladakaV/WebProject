<template>
    <div class="expertise mx-0">
      <div class="wrapper-expertise ">
        <div class="empty-div">
        </div>
        <div class="divlaptop d-flex">
          <div class="div1-expertise ">
            <img style="width: 100%;" src="../img/laptop.png" alt="Error">
          </div>
          <div class="div2-expertise">
            <div class="d-flex flex-column" style="margin-left: 100px">
              <div style="text-align: left">
                <h1 style="margin-bottom: 50px; color: white; width: 40%;"><strong>Экспертиза в Drupal,
                  опыт 18 лет!</strong></h1>
              </div>
              <div id="2div" class="d-flex flex-row">
                <div class="d-flex">
                  <div style="height: 100px; width: 3px; background-color: red;">
                  </div>
                  <div style="width: 300px">
                    <h6 style="margin-left: 20px; height: 100%; width: 80%; color: white;">
                      Только системный подход - контроль версий,
                      резервирование и тестирование!</h6>
                  </div>
                </div>
                <div class="d-flex">
                  <div style="height: 100px; width: 3px; background-color: red;">
                  </div>
                  <div style="width: 300px">
                    <h6 style="margin-left: 20px; height: 100%; width: 80%; color: white;">
                      Только Drupal сайты, не берём на подержку сайты
                      для других CMS!</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  .divlaptop {
    display: flex;
  }
  
  .div1-expertise {
    width: 600px;
    height: 600px;
    scale: 1.0;
  }
  
  .div2-expertise {
    width: 65%;
    margin-top: 200px;
  }
  
  .wrapper-expertise {
    height: 100%;
  }
  
  .div1-expertise img {
    width: 100%;
    height: auto;
    margin-top: 150px;
  }
  
  @media screen and (max-width: 575px) {
  
    .expertise {
      height: 100vh;
    }
  
    .empty-div {
      height: 35%;
    }
  
    .div1-expertise {
      position: absolute;
      right: 0;
      bottom: 7%;
    }
  }
  
  
  </style>