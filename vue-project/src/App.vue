<template>
  <Header/>
  <MobileNav/>
  <OurDev/>
  <Team/>
  <Cases/>
  <Partners/>

</template>

<script>

import MobileNav from "../Components/MobileNav"
import Header from "../Components/Header";
import OurDev from "../Components/OurDev";
import Team from "../Components/Team";
import Cases from "../Components/Cases";
import Partners from "../Components/Partners";



export default {
  components: {
    Header,
    MobileNav,
    OurDev,
    Team,
    Cases,
    Partners,
  }
}
</script>

<style>
</style>