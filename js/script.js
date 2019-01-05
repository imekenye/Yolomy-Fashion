$(function () {
    $("#chkmen").click(function () {
        if ($(this).is(":checked")) {
            $("#men").show();
            $('#men').addClass('animated fadeInLeft');
        } else {
            $("#men").hide();
        }
    });
    $("#chkwomen").click(function () {
        if ($(this).is(":checked")) {
            $("#women").show();
            $('#women').addClass('animated fadeInRight');
        } else {
            $("#women").hide();
        }
    });
    $("#chkchildren").click(function () {
        if ($(this).is(":checked")) {
            $("#children").show();
            $('#children').addClass('animated fadeInRight');
        } else {
            $("#children").hide();
        }
    });
    $("#seeAll").click(function () {
        if ($(this).is(":checked")) {
            $("#women").show();
            $("#men").show();
        } else {
            $("#women").show();
            $("#men").show();
        }
    });
});

var clicked = false;
$(".checkall").on("click", function() {
  $(".check").prop("checked", !clicked);
  clicked = !clicked;
});