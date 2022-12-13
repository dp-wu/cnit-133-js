/* ****************************************
PART 1 - Show Selected Style
**************************************** */
$(function () {
    // change background color
    $("#bgcolor :radio").click(function () {
        $("#change_paragraph").css($(this).attr("name"), $(this).val());
    });
    // change font style
    $("#ftstyle :checkbox").change(function () {
        $("#change_paragraph").css($(this).attr("name"), this.checked ? $(this).val(): "");
    });
    // change font size
    $("#ftsize").change(function (){
        $("#change_paragraph").css($(this).attr("name"), $(this).val());
    });
});

/* ****************************************
PART 2 - Show Selected Style
**************************************** */
$(function () {
    $("#tohw2").mouseleave(function () {
        $("#hide2").css('display', 'none');
    });
    $("#tohw2").mouseover(function () {
        $("#hide2").css('display', 'block');
    });
    $("#tohw3").mouseleave(function () {
        $("#hide3").css('display', 'none');
    });
    $("#tohw3").mouseover(function () {
        $("#hide3").css('display', 'block');
    });
    $("#tohw4").mouseleave(function () {
        $("#hide4").css('display', 'none');
    });
    $("#tohw4").mouseover(function () {
        $("#hide4").css('display', 'block');
    });
})

