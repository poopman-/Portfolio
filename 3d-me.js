//3d-me.js created by Kyle Cypher
$(document).ready(function(){
function perspective(e, t) {
    $(".3d-me").css({
        transform: "perspective( 1000px ) rotateY(" + e + "deg) rotateX(" + t + "deg)"
    });
}
$("body").bind("mousemove", function(e) {
    var t = ({
            width: $(window).width(),
            height: $(window).height()
        }, e.clientX - $(window).width() / 2),
        i = e.clientY - $(window).height() / 2;
    perspective(t / -100, i / 100);
});
})