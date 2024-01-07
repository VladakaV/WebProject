<template>
  <section my-5>
      <h2>С нами работают</h2>
      <div id="podh2">Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем
          всё, чтобы наше сотрудничество было долгим.</div>
      <div>
          <div id="content">
              <div id="slider">
                  <div id="slider-content">
                      <swiper :slidesPerView="2" :spaceBetween="10" :loop="true" :centeredSlides="true" :breakpoints="{
                          '575': {
                              slidesPerView: 6,
                              spaceBetween: 10,
                          },
                      }" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
                          <swiper-slide v-for="i in 13">
                              <div class="client">
                                  <img loading="lazy" :src="require('../' + 'img/parners/' + i + '.jpg')">
                              </div>
                          </swiper-slide>
                      </swiper>
                  </div>
              </div>
              <div id="slider">
                  <div id="slider-content">
                      <swiper :slidesPerView="2" :spaceBetween="10" :loop="true" :centeredSlides="false" :breakpoints="{
                          '575': {
                              slidesPerView: 6,
                              spaceBetween: 10,
                          },
                      }" :autoplay="{
  delay: 1500,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
                          <swiper-slide v-for="i in 13">
                              <div class="client">
                                  <img loading="lazy" :src="require('../' + 'img/parners/' + i + '.jpg')">
                              </div>
                          </swiper-slide>
                      </swiper>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay, Navigation, Pagination, EffectCards } from "swiper";
export default {
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {
      return {
          modules: [Autoplay, Navigation, Pagination, EffectCards],
      };
  },
};
</script>

<style scoped>
#podh2 {
  width: 740px;
  max-width: 100%;
  padding: 0 15px;
  margin: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  text-align: center;
  color: #505570;
  margin-bottom: 40px;
}

.client {
  background-color: white;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
}

img {
  display: block;
  max-width: 100%;
  height: 100%;
  margin: auto;
}

#slider {
  margin-bottom: 10px;
}

.swiper {
  width: 100%;
  height: 100%;
}

section {
  margin-bottom: 110px;
  font-family: Montserrat;
  font-style: normal;
  background-size: 26%;
}

h2 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 42px;
  text-align: center;
  color: #050c33;
}

@media (min-width: 1400px) {}

@media (max-width: 1080px) {
  h2 {
      font-size: 36px;
  }
}

@media (max-width: 991px) {
  h2 {
      margin-top: 20px;
      font-size: 32px;
  }
}

@media (max-width: 767px) {
  h2 {
      font-size: 24px;
      margin-bottom: 20px;
      margin-top: initial;
  }
}

@media (max-width: 600px) {
  #podh2 {
      text-align: left;
      margin-bottom: 20px;
  }

  section {
      margin-bottom: 45px;
  }
}
</style>