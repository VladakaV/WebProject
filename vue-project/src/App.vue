<template>
  <Header/>
  <MobileNav/>
  <OurDev/>
  <Team/>
  <Cases/>

</template>

<script>

import MobileNav from "../Components/MobileNav"
import Header from "../Components/Header";
import OurDev from "../Components/OurDev";
import Team from "../Components/Team";
import Cases from "../Components/Cases";



export default {
  components: {
    Header,
    MobileNav,
    OurDev,
    Team,
    Cases,
  }
}
</script>

<style>
</style>