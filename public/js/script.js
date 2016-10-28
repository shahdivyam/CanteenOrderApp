// JavaScript Document

$(function() {
    $("#links").affix({
        offset: {
            top: $(window).height()
        }
    });

    $(".popular").on("click", function(){
        $("#popularBlock").removeClass("hidden");
        $("#menuBlock").addClass("hidden");
        $("#cartBlock").addClass("hidden");
    });

    $(".menu").on("click", function(){
        $("#menuBlock").removeClass("hidden");
        $("#popularBlock").addClass("hidden");
        $("#cartBlock").addClass("hidden");
    }); 

    $(".cart").on("click", function(){
        $("#cartBlock").removeClass("hidden");
        $("#popularBlock").addClass("hidden");
        $("#menuBlock").addClass("hidden");
    });
});
