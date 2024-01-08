<template>
  <Header/>
  <MobileNav/>
  <Achievement/>
  <Expertise/>
  <OurDev/>
  <Team/>
  <Cases/>
  <FAQ/>

</template>

<script>

import MobileNav from "../Components/MobileNav"
import Header from "../Components/Header";
import Achievement from "../Components/Achievement";
import Expertise from "../Components/Expertise";
import OurDev from "../Components/OurDev";
import Team from "../Components/Team";
import Cases from "../Components/Cases";
import Partners from "../Components/Partners";
import FAQ from "../Components/FAQ";



export default {
  components: {
    Header,
    MobileNav,
    Achievement,
    Expertise,
    OurDev,
    Team,
    Cases,
    Partners,
    FAQ,
  }
}
</script>

<style>
</style>