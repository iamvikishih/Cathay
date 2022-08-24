$(document).ready(function(){

	$('#life_1').click(function(){
		$(this).addClass("life")
		$('#card_1').removeClass("card")
		$('.tab_color_1').removeClass("green").addClass("orange")
		$('#card_content_1').removeClass("show")
		$('#life_content_1').addClass("show")

	})
	$('#card_1').click(function(){
		$(this).addClass("card")
		$('#life_1').removeClass("life")
		$('.tab_color_1').removeClass("orange").addClass("green")
		$('#life_content_1').removeClass("show")
		$('#card_content_1').addClass("show")
	})

	// ====================================

	$('#life_2').click(function(){
		$(this).addClass("life")
		$('#card_2').removeClass("card")
		$('.tab_color_2').removeClass("green").addClass("orange")
		$('#card_content_2').removeClass("show")
		$('#life_content_2').addClass("show")

	})
	$('#card_2').click(function(){
		$(this).addClass("card")
		$('#life_2').removeClass("life")
		$('.tab_color_2').removeClass("orange").addClass("green")
		$('#life_content_2').removeClass("show")
		$('#card_content_2').addClass("show")
	})

	// ====================================

	$('#life_3').click(function(){
		$(this).addClass("life")
		$('#card_3').removeClass("card")
		$('.tab_color_3').removeClass("green").addClass("orange")
		$('#card_content_3').removeClass("show")
		$('#life_content_3').addClass("show")

	})
	$('#card_3').click(function(){
		$(this).addClass("card")
		$('#life_3').removeClass("life")
		$('.tab_color_3').removeClass("orange").addClass("green")
		$('#life_content_3').removeClass("show")
		$('#card_content_3').addClass("show")
	})

	// ====================================

	$('#life_4').click(function(){
		$(this).addClass("life")
		$('#card_4').removeClass("card")
		$('.tab_color_4').removeClass("green").addClass("orange")
		$('#card_content_4').removeClass("show")
		$('#life_content_4').addClass("show")

	})
	$('#card_4').click(function(){
		$(this).addClass("card")
		$('#life_4').removeClass("life")
		$('.tab_color_4').removeClass("orange").addClass("green")
		$('#life_content_4').removeClass("show")
		$('#card_content_4').addClass("show")
	})

	// ====================================

	$('#life_5').click(function(){
		$(this).addClass("life")
		$('#card_5').removeClass("card")
		$('.tab_color_5').removeClass("green").addClass("orange")
		$('#card_content_5').removeClass("show")
		$('#life_content_5').addClass("show")

	})
	$('#card_5').click(function(){
		$(this).addClass("card")
		$('#life_5').removeClass("life")
		$('.tab_color_5').removeClass("orange").addClass("green")
		$('#life_content_5').removeClass("show")
		$('#card_content_5').addClass("show")
	})

	// ====================================

	$('#life_6').click(function(){
		$(this).addClass("life")
		$('#card_6').removeClass("card")
		$('.tab_color_6').removeClass("green").addClass("orange")
		$('#card_content_6').removeClass("show")
		$('#life_content_6').addClass("show")

	})	
	$('#card_6').click(function(){
		$(this).addClass("card")
		$('#life_6').removeClass("life")
		$('.tab_color_6').removeClass("orange").addClass("green")
		$('#life_content_6').removeClass("show")
		$('#card_content_6').addClass("show")
	})

	// ====================================

	$('.swithc_icon').click(function(){
		var aaa = $(this).text()
		console.log(aaa)

		if( aaa == " + "){
			$(this).text(" - ")
			console.log('aaa')
		} else {
			$(this).html(" + ")
			console.log('bbb')
		}
		
		$(this).parent().find(".answer").toggleClass("show")
	})

});






