<template>
   <div class="team_block container">
    <h2 class="team_header py-5">Команда</h2>
    <div class="team_panels d-flex flex-wrap">
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/team1.jpg" alt="photo1">
        <h5>Витченко Влада</h5>
        <div>Создатель первой части сайта</div>
      </div>
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/team2.jpg" alt="photo2">
        <h5>Печканова Валерия</h5>
        <div>Создатель второй части сайта</div>
      </div>
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/team3.jpg" alt="photo3">
        <h5>Иневаткин Юрий</h5>
        <div>Создатель третьей части сайта</div>
      </div>

    </div>
    <div class="team_button d-flex justify-content-center pb-5">
      <a class="btn px-4 py-3" href="/team.html">Вся команда</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* team */

.team_header {
    font-weight: bold;
    text-align: center;
}

.team_block p {
    font-family: "Montserrat";
    font-weight: 1000;
}
.btn1 {
    display: inline-block;
    color: rgb(0, 0, 0);
    border-radius: 5px;
    border: 1px solid gray;
    transition-duration: 0.4s;
    background-color: white;
}
.btn1:hover {
    background-color: coral;
    color: white;
  }
.team_photo {
    height: 280px;
    width: 280px;
    display: block;
    margin-bottom: 10px;
}
.team_panel {
    padding: 0 45px;
    margin-bottom: 20px;
}

</style>