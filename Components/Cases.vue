<template>
  <div class="cases container py-5">
    <h2 class="cases_header py-5">Последние кейсы</h2>
    <div class="cases_panels d-flex flex-wrap">
      <div class="con con1 col-xs-6 col-md-4 my-3">
        <img src="../img/kit/1.png" alt="kit">
        <div class="cont p-3">
          <div class="mx-auto my-2">
            <div class="my-1">
              <strong>Настройка кэширования данных. Апргрейд сервера.
                Ускорение работы сайта в 30 раз!</strong>
            </div>
            <div style="margin-bottom: 20px;">
              <h6 class="number" style="font-size: 12px">04.05.2020</h6>
            </div>
            <div>
              <h6>Влияние скорости загрузки страниц сайта на отказы и конверсии.
                Кейс ускорения...</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="con con2 col-xs-6 col-md-8 my-3">
        <div class="con_back py-5">
          <div class="con_text_wrapper py-5">
            <div class="con_text px-5">
              Meow
            </div>
          </div>
        </div>
      </div>
      <div class="con con3 col-xs-6 col-md-4 my-3">
        <div class="con_back py-5">
          <div class="con_text_wrapper py-5">
            <div class="con_text px-5">
              Meow
            </div>
          </div>
        </div>
      </div>
      <div class="con con4 col-xs-6 col-md-4 my-3">
        <div class="con_back py-5">
          <div class="con_text_wrapper py-5">
            <div class="con_text px-5">
              Meow
            </div>
          </div>
        </div>
      </div>
      <div class="con con5 col-xs-6 col-md-4 my-3">
        <img src="../img/kit/4.jpg" alt="kit">
        <div class="cont p-3">
          <div class="mx-auto my-2">
            <div class="my-1">
              <strong>Настройка кэширования данных. Апргрейд сервера.
                Ускорение работы сайта в 30 раз!</strong>
            </div>
            <div style="margin-bottom: 20px;">
              <h6 class="number" style="font-size: 12px">04.05.2020</h6>
            </div>
            <div>
              <h6>Влияние скорости загрузки страниц сайта на отказы и конверсии.
                Кейс ускорения...</h6>
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
/* Cases */


.con img,
.con {
  border-radius: 10px;
}

.con_back {
  height: 100%;
  border-radius: 10px;
  background-size: cover;
}

.con_text {
  position: absolute;
  font-size: x-large;
  font-weight: bold;
  color: white;
  bottom: 0;
  left: 0;
  display: inline-block;
}

.con_text_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.con2 .con_back {
  background-image: url(../img/kit/2.png);
}

.con3 .con_back {
  background-image: url(../img/kit/7.jpg);
}

.con4 .con_back {
  background-image: url(../img/kit/3.jpg);
}

.cases img {
  width: 100%;
  height: auto;
}

.cases_header {
  font-weight: bold;
  text-align: center;
}

</style>