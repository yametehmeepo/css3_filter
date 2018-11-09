var rangeValues = [10, 0.5, 2]


$(function(){
	$('#left img').attr('onload', function(){
		$('.controller span').click(function(){
			var initnumber = $(this).data('initnumber');
			//console.log(initnumber)
			var target = $(this).data('target');
			$('.range input').css('display', 'none')
			$('.controller span').removeClass('on')
			$(this).addClass('on')
			var $img = $('#left img').clone()
			$('#right').empty()
			$('#right').append($img)
			$('#right img').css('filter', $(this).data('filter'))
			//console.log(($('#right img').css('filter')))
			$(target).val(initnumber)
			$(target).css('display', 'block')
		})

		$('#blur').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'blur(' + $(this).val() + 'px)')
		})
		$('#brightness').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'brightness(' + $(this).val() + ')')
		})
		$('#contrast').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'contrast(' + $(this).val() + ')')
		})
		$('#drop-shadow').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'drop-shadow(' + $(this).val() + 'px ' + $(this).val() + 'px ' + $(this).val() + 'px ' +  '#999)')
		})
		$('#grayscale').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'grayscale(' + $(this).val() + ')')
		})
		$('#hue-rotate').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'hue-rotate(' + $(this).val() + 'deg)')
		})
		$('#opacity').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'opacity(' + $(this).val() + ')')
		})
		$('#saturate').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'saturate(' + $(this).val() + ')')
		})
		$('#sepia').on('input propertychange', function(e){
			e.preventDefault();
			$('#right img').css('filter', 'sepia(' + $(this).val() + ')')
		})

	})

})
