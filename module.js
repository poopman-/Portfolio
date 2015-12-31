$(document).ready(function(){


$(".module-hover-container").addClass("no-hover");
$(".module-container").css("top", "");
$(".no-hover .module-container").css({
    top: ($(".module").height() - $(".module-header").height() + 15)
});
$(window).resize(function() {
    $(".module-hover-container").addClass("no-hover");
    $(".module-container").css("top", "");
    $(".no-hover .module-container").css({
        top: ($(".module").height() - $(".module-header").height() + 15)
    });
});
$(".module-hover-container").on("mouseover", function() {
    $(".module-hover-container").addClass("no-hover");
    $(this).removeClass("no-hover");
    $(".module-container").css("top", "");
    $(".no-hover .module-container").css({
        top: ($(".module").height() - $(".module-header").height() + 15)
    });
    $($(this).children().children()[0]).css("top", "");
});


$(".href-module").on("click",function(){
console.log(document.location= $(this).data("href"))
	
})




})