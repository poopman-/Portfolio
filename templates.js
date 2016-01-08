$(document).ready(function() {
	var Hc = Handlebars.compile;
	
	
    //Templates
    var sidebar_context = {
		
        "sidebar": {
			"main": 		'<div class="sidebar-container">' + 
							'<a class="sidebar-link about-hover-bg"><span>About Me</span><span class="material-icons"></span></a>' + 
							'<a class="sidebar-link contact-hover-bg"><span>Contact Me</span><span class="material-icons"></span></a>' + 
							'<a class="sidebar-link gallery-hover-bg"><span>View Gallery</span><span class="material-icons"></span></a></div>',
						
			"gallery":	'<div class="sidebar-container">' + 
							'<a class="sidebar-link about-hover-bg"><span>About Me</span><span class="material-icons"></span></a>' + 
							'<a class="sidebar-link contact-hover-bg"><span>Contact Me</span><span class="material-icons"></span></a>' + 
							'<a class="sidebar-link gallery-hover-bg href-module" data-href="../../index.html"><span>View Gallery</span><span class="material-icons"></span></a></div>'
		}
    };
	
	
    //Make template function
    function handlebar(s, f, p) {$(p).html(Hc($(s).html())(f));}	
		
    //Generate templates
    handlebar('#sidebar-template', sidebar_context, '.sidebar-placeholder');
	
	
	
});//ready

