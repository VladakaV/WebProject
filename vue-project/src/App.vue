<template>
  <Header/>
  <MobileNav/>
  <Achievement/>
  <Expertise/>
  <Tarif/>
  <OurDev/>
  <Team/>
  <Cases/>
  <Partners/>
  <FAQ/>
  <Popup/>
  <Footer1/>
</template>

<script>
import MobileNav from "../Components/MobileNav"
import Header from "../Components/Header";
import Achievement from "../Components/Achievement";
import Expertise from "../Components/Expertise";
import Tarif from "../Components/Tarif";
import OurDev from "../Components/OurDev";
import Team from "../Components/Team";
import Cases from "../Components/Cases";
import Partners from "../Components/Partners";
import FAQ from "../Components/FAQ";
import Popup from "../Components/Popup.vue";
import Footer1 from "../Components/Footer1";

export default {
  components: {
    Header,
    MobileNav,
    Achievement,
    Expertise,
    Tarif,
    OurDev,
    Team,
    Cases,
    Partners,
    FAQ,
    Popup,
    Footer1,
  },
  mounted() {
    this.animateOpacity();
  },
  methods: {
    animateOpacity() {
      const abc = document.getElementById("popup");
      abc.style.opacity = 0;
      
      const duration = 500;
      let start;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const opacity = (timestamp - start) / duration;
        abc.style.opacity = opacity;
        if (opacity >= 1) return;
        window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    },
  },

  }
</script>

<style>
</style>
