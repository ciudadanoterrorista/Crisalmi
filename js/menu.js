$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$(".menuweb").css({"background-color": "rgba(255,255,255, .95)"});
				$(".direccion img").css({"display": "inline-block"});
				$(".arrow").css({"display": "none"});
				$(".direccion").css({"padding-left": "82px"});
				$(".direccion").css({"padding-top": "19px"});
				flag = true;
				
			
			}
		}else{
			if(flag){
                $(".menuweb").css({"background-color": "rgba(255,255,255, 0)"});
				$(".direccion img").css({"display": "none"});
				$(".arrow").css({"display": "block"});
                $(".direccion").css({"padding-left": "92px"});
				$(".direccion").css({"padding-top": "27px"});

				flag = false;
			}
		}
	});

});