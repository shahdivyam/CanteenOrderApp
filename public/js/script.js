// JavaScript Document

$("document").ready(function(){
    "use strict";
    
    $(".popular").click(function(){
        console.log("popular was clicked");
        $("#popularBlock").css("left","0px");
$(".popular").addClass("activeButton");
        $("#popularBlock").css("display","inherit");
        $("#menuBlock").css("left","3000px");
        $("#menuBlock").css("display","none");
        $("#cartBlock").css("left","3000px");
        $("#cartBlock").css("display","none");
        $(".menu").removeClass("activeButton");
        $(".cart").removeClass("activeButton");
        
    });
    
    $(".menu").click(function(){
        console.log("menu was clicked");
        $("#menuBlock").css("left","0px");
$(".menu").addClass("activeButton");
        $("#menuBlock").css("display","inherit");
        $("#popularBlock").css("left","-3000px");
        $("#popularBlock").css("display","none");
        $("#cartBlock").css("left","3000px");
        $("#cartBlock").css("display","none");
        $(".menu").removeClass("activeButton");
        $(".cart").removeClass("activeButton");
        
    });
    $(".cart").click(function(){
        console.log("cart clicked");
        $("#cartBlock").css("display","inherit");
        $("#cartBlock").css("left","0px");
        $("#popularBlock").css("left","-3000px");
        $("#popularBlock").css("display","none");
        $("#menuBlock").css("display","none");
        $("#menuBlock").css("left","0px");
        
    });
    
    
});