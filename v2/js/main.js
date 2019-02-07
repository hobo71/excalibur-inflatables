if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
    // smooth scroll
    $('.smooth').click(function(e) {
        e.preventDefault();
        var section = $(this).attr('href');
        var $offset = $("#desktop-pad").height();
        $('html,body').unbind().animate({scrollTop: $(section).offset().top-$offset},'slow');
    });
}

function active(id){
    var menuList = document.getElementsByClassName('castle-type');
    var allCastles = document.getElementsByClassName('castle-information');

    switch (id){
        case 0:
            text = "<p>Our Small bouncy castles are suitable for parties for young children, and allow up to 10 children at a time.</p>";
            break;
        case 1:
            text = "<p>Medium bouncy castles are suitable for parties of bigger groups of 15+ or older children.</p>";
            break;
        case 2:
            text = "<p>Our Large bouncy castles are suitable for larger events such as charity fundraisers or substantial groups of children.</p>";
            break;
        case 3:
            text = "<p>Our Specialty bouncy castles are suitable for adult parties and charity events.</p>";
            break;
    }
    document.getElementById('category-desc').innerHTML = text;

    for (i = 0; menuList[i]; i++){
        if (menuList[i] == menuList[id]){
            menuList[i].classList.add("current");
        }
        else{
            menuList[i].classList.remove("current");
        }
    }

    for (i = 0; allCastles[i]; i++){
        if (allCastles[i] == allCastles[id]){
            allCastles[i].classList.add("showing");
            allCastles[i].classList.remove("hiding");
        }
        else{
            allCastles[i].classList.add("hiding");
            allCastles[i].classList.remove("showing");
        }
    }
}
    
$(document).ready(function(){
	$(".hiding").toggle();
	$(".button2").click(function(){
			$('.hiding').fadeOut('fast');
			$('.showing').fadeIn('slow');
	});
});

$("#desktop-pad").height($(".navbar-nav").height());
$(document).ready(function(){
	window.onresize = function(){
		$("#desktop-pad").height($(".navbar-nav").height());
	}
});