<template>
   <div class="FAQ_block container py-5 col-12 col-md-9 col-lg-8">
            <div class="FAQ_header">
                <h1>FAQ</h1>
            </div>
            <div class="FAQ_body accordion">
                <div class="FAQ_elem">
                    <div class="FAQ_elem_wrapper p-2">
                        <div class="FAQ_question">
                            <h3>
                                <p>1.</p>Вопрос 1
                            </h3>
                        </div>
                        <div class="FAQ_answer">
                            Ответ 1
                        </div>
                    </div>
                </div>
                <div class="FAQ_elem">
                    <div class="FAQ_elem_wrapper p-2">
                        <div class="FAQ_question">
                            <h3>
                                <p>2.</p>Вопрос 2
                            </h3>
                        </div>
                        <div class="FAQ_answer">
                            Ответ 2
                        </div>
                    </div>
                </div>
                <div class="FAQ_elem">
                    <div class="FAQ_elem_wrapper p-2">
                        <div class="FAQ_question">
                            <h3>
                                <p>3.</p>Вопрос 3
                            </h3>
                        </div>
                        <div class="FAQ_answer">
                            Ответ 3
                        </div>
                    </div>
                </div>
                <div class="FAQ_elem">
                    <div class="FAQ_elem_wrapper p-2">
                        <div class="FAQ_question">
                            <h3>
                                <p>4.</p>Вопрос 4
                            </h3>
                        </div>
                        <div class="FAQ_answer">
                            Ответ 4
                        </div>
                    </div>
                </div>
                <div class="FAQ_elem">
                    <div class="FAQ_elem_wrapper p-2">
                        <div class="FAQ_question">
                            <h3>
                                <p>5.</p>Вопрос 5
                            </h3>
                        </div>
                        <div class="FAQ_answer">
                            Ответ 5
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>


$(document).ready(function () {
    $(".FAQ_block .accordion .FAQ_answer").hide();
    $(".FAQ_block .accordion .FAQ_question").click(function () {
        $(this).next(".FAQ_answer").slideToggle("slow").siblings(".FAQ_answer:visible").slideUp("slow");
        $(this).parent().parent().toggleClass("active");
        $(this).siblings(".FAQ_elem").removeClass("active");
    });
});
</script>

<style >
/* FAQ */

.FAQ_header {
    text-align: center;
}

.FAQ_block p {
    margin: 0px;
    display: inline-block;
}

.FAQ_block h3 {
    margin: 0px;
}


.FAQ_elem {
    width: 100%;
    margin: 10px 0;
}

.FAQ_elem.active {
    width: 100%;
    border-color: coral;
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
}

.FAQ_body {
    width: 100%;
}

</style>