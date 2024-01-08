<template>
     <div class="feetback">
            <div class="feetback_cont container py-5"></div>
                <h2 class="feetbeck_header ">Отзывы</h2>
                <div class="slider">
                    <div class="slider_item " style="border: 1px solid gray;  box-shadow: 0 2px 4px rgba(0, 0, 0, .2); 
                    ">
                    <div>
                        <div class="osnovn_cont container p-5">
                            <div class="photo_cont">
                                <img src="../img/logo_0.png" alt="logo">
                            </div>
                            <div class="osnov_text_cont">
                                Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!
                            </div>
                            <div class="foot_text_cont">
                                <div class="field-content">С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»&nbsp;<a href="http://www.cielparfum.com/">http://www.cielparfum.com/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider_item " style="border: 1px solid gray;  box-shadow: 0 2px 4px rgba(0, 0, 0, .2); 
                    ">
                    <div>
                        <div class="osnovn_cont container p-5">
                            <div class="photo_cont">
                                <img src="../img/logo.png" alt="logo">
                            </div>
                            <div class="osnov_text_cont">
                                Сергей — профессиональный, высококвалифицированый программист с огромным опытом в ИТ. Я долгое время общался с топ-фрилансерами (вся первая двадцатка) на веблансере и могу сказать, что С СЕРГЕЕМ ОНИ И РЯДОМ НЕ ВАЛЯЛИСЬ. Работаем с Сергеем до сих пор. С ним приятно работать, я доволен.
                            </div>
                            <div class="foot_text_cont">
                                <div class="field-content">Сергей Чепурко, руководитель проекта&nbsp;<a href="http://www.personal-writer.com/">www.personal-writer.com</a>&nbsp;/&nbsp;<a href="http://www.writers-united.org/">www.writers-united.org</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
</template>
<script>
$(document).ready(function () {
    $('.slider').slick( {
        adaptiveHeight: true,
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        dots: false,
        responsive:[
            {
                breakpoint:576,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1
                }
            }
            
        ]
    })
   
});
</script>
<style>
.feetbeck_header{
    font-weight: bold;
    text-align: center;
    
}
.feetback{
    background: url('../img/right-quote-sign.svg') no-repeat left top;
}
.slider .slick-list {
	overflow: hidden;
}
.slider{
    position: relative;
    padding: 60px 200px;
    margin: 0, 150px;
}
.osnovn_cont{
    padding: 14px, 60px;
}
.slider .slick-list {
    margin: 20px;
  
}
.osnov_text_cont{
    padding-top: 40px;
    font-weight: bold;
}
.slick-prev:before,
.slick-next:before
{
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
