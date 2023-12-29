$(document).ready(function () {
    $(".FAQ_block .accordion .FAQ_answer").hide();
    $(".FAQ_block .accordion .FAQ_question").click(function () {
        $(this).next(".FAQ_answer").slideToggle("slow").siblings(".FAQ_answer:visible").slideUp("slow");
        $(this).parent().parent().toggleClass("active");
        $(this).siblings(".FAQ_elem").removeClass("active");
    });
}); 