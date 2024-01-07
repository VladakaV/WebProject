<template>
  <Header/>
  <MobileNav/>
  <Achievement/>
  <OurDev/>
  <Team/>
  <Cases/>
  <Partners/>

</template>

<script>

import MobileNav from "../Components/MobileNav"
import Header from "../Components/Header";
import Achievement from "../Components/Achievement";
import OurDev from "../Components/OurDev";
import Team from "../Components/Team";
import Cases from "../Components/Cases";
import Partners from "../Components/Partners";



export default {
  components: {
    Header,
    MobileNav,
    Achievement,
    OurDev,
    Team,
    Cases,
    Partners,
  }
}
</script>

<style>
</style>