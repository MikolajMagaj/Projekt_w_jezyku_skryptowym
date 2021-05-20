// odpowiada za ładowanie zawartosci
$("#header").load("header.html");
$("#nav").load("nav.html");
$("#socials").load("socials.html");
$("#footer").load("footer.html");

$(window).on("load",function(){$("#main").load("main_page.html");});

//odpowiada za poprawne skalowanie slidera oraz socialsow wzgledem szerokosci i wysokosci okna
$(window).resize(function(){
  let imgWidth=$("#header").width();
  let imgHeight=imgWidth/1.7777;
  $("#header").css("height",imgHeight+"px");
  let docHeight=document.documentElement.clientHeight;
  let socHeight=$("#socials").height();
  $("#socials").css("margin-top",(((docHeight-socHeight)/2)-10)+"px");
});

let imgWidth=$("#header").width();
let imgHeight=imgWidth/1.7777;
$("#header").css("height",imgHeight+"px");
let docHeight=document.documentElement.clientHeight;
let socHeight=$("#socials").height();
$("#socials").css("margin-top",(((docHeight-socHeight)/2)-10)+"px");


//odpowiada za pokazywanie guzika powrot do gory
$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > imgHeight/2) {
			$('#upper').fadeIn('slow');
    } 
    else {
		  $('#upper').fadeOut('slow');
		}
  });