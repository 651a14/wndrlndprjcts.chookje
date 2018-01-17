$(document).ready(function() {
	$('#gourl').change(function(){

	if($("#gourl option:selected").val() != ''){
		location.href = $("#gourl option:selected").val();
	}

    });
});

$(window).ready(function() {

	set_swipe();
	
	function set_swipe() {
		window.mySwipe = Swipe(document.getElementById('slider'), {
			continuous: true,
			transitionEnd: function(index, elem) {
				$('.member').removeClass('active');
				$('.member').eq(index).addClass('active');
			}
		});

		$('.swipe-left, .swipe-left-white').click(function(e) {
			e.preventDefault();
			mySwipe.prev();
			
			
		});

		$('.swipe-right, .swipe-right-white').click(function(e) {
			e.preventDefault();
			mySwipe.next();
		});

		$('.member').each(function(idx, elem) {
			$(elem).click(function(e) {
				$('.member').removeClass('active');
				mySwipe.slide(idx, 500);
				$(this).addClass('active');
				e.preventDefault();
			});
		});
	}
	
});