<template>
    <div id="tariff" class="tariff_block">
      <div class="container">
        <h2 class="tariff_header pt-5">Тарифы</h2>
        <div class="tariff_panels d-flex flex-wrap my-3">
          <div class="tariff_wrapper col-xs-6 col-sm-6 col-md-4 my-xs-5">
            <div class="tariff_panel">
              <div class="tariff_content">
                <h3 class="tariff_content_header">Стартовый</h3>
                <ul>
                  <div>
                    <li>Консультация и работы по SEO</li>
                  </div>
                  <div>
                    <li>Услуги дизайнера</li>
                  </div>
                  <div>
                    <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                  </div>
                  <div>
                    <li>Предоплата от 6000 рублей в месяц</li>
                  </div>
                </ul>
                <a href="#form" class="btn mt-3 mb-1">Свяжитесь с нами</a>
              </div>
            </div>
          </div>
          <div class="tariff_wrapper col-xs-6 col-sm-6 col-md-4">
            <div class="tariff_panel">
              <div class="tariff_content">
                <h3 class="tariff_content_header">Бизнес</h3>
                <ul>
                  <div>
                    <li>Консультация и работы по SEO</li>
                  </div>
                  <div>
                    <li>Услуги дизайнера</li>
                  </div>
                  <div>
                    <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                  </div>
                  <div>
                    <li>Предоплата от 6000 рублей в месяц</li>
                  </div>
                </ul>
                <a href="#popupForm" class="btn mt-3 mb-1">Свяжитесь с нами</a>
              </div>
            </div>
          </div>
          <div class="tariff_wrapper col-xs-6 col-sm-6 col-md-4">
            <div class="tariff_panel ">
              <div class="tariff_content">
                <h3 class="tariff_content_header">VIP</h3>
                <ul>
                  <div>
                    <li>Консультация и работы по SEO</li>
                  </div>
                  <div>
                    <li>Услуги дизайнера</li>
                  </div>
                  <div>
                    <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                  </div>
                  <div>
                    <li>Предоплата от 6000 рублей в месяц</li>
                  </div>
                </ul>
                <a href="#form" class="btn mt-3 mb-1">Свяжитесь с нами</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tariff_dop m-3 d-flex flex-column justify-content-center align-items-center">
          <p class="m-0">Вам не подходят наши тарифы? Оставте заявку и мы</p>
          <p class="m-0">предложим вам индивидуальные условия!</p>
          <a href="#form" class="m-2">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  /* tariff */
  
  .tariff_header {
    font-weight: bold;
    text-align: center;
  }
  
  .tariff_back {
    position: absolute;
    z-index: -10;
    right: 0;
    max-height: 600px;
    height: 100%;
    opacity: 50%;
  }
  
  .tariff_panel {
    max-width: 370px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    transition: transform .2s;
    background-color: #ffffff;
  }
  
  .tariff_panel ul {
    padding-left: 20px;
  }
  
  .tariff_panel li {
    margin-bottom: 10px;
  }
  
  .tariff_panel:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 60px rgb(162 162 162 / 25%);
    background-color: #ffffff;
  
  }
  
  .tariff_panel:hover .btn {
    background-color: coral;
  }
  
  .tariff_panel h3 {
    border-bottom-style: solid;
    border-color: rgb(53, 51, 50);
    border-width: 2px;
  
  }
  
  .tariff_panel .btn {
    color: black;
  }
  
  .tariff_content {
    padding: 30px 20px;
  }
  
  .tariff_dop {
    font-size: small;
  }
  
  .tariff_content_header {
    margin: 30px 0;
  }
  
  .tariff_wrapper {
    margin: 10px 0;
  }
  
  .tariff_block {
    background: url(../img/D-background-opacity.svg) no-repeat right top, #fff;
    background-size: cover;
  }
  </style>