var transition = {
    out: function() {
        $(".whiteTransition").show();
    },
    in : function() {
        $(".whiteTransition-white").animate({
		opacity: '0.01'},{
				duration: 0,
                complete: function() {
setTimeout(function(){
	$(".whiteTransition-white").fadeOut();
},500)
					
					    var transitionInterval = setInterval(function() {
        if ($(".whiteTransition-white").css("opacity") == "0") {
            $(".whiteTransition-white").hide();
            window.clearInterval('checkOpacity');
        }
    }, 10);
					
                }
            
        });

}
};