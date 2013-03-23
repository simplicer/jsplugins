;( function( $ ) {
	$.fn.spoiler = function() {
		return this.each( function(c){
			if(!c) c='#000';
			$('html>head')
				.append('<style>.spoilerblur{color:transparent;text-shadow:0 0 8px'+c+'}</style>');
			$(this).each(function(){
				var a = $(this).css('opacity');
				$(this)
					.toggleClass('spoilerblur')
					.on('click',function(){
						$(this).toggleClass('spoilerblur');
					})
					.on('mouseover', function(){
						$(this).animate({
							'opacity': '0.5'
						});
					})
					.on('mouseout', function(){
						$(this).animate({
							'opacity': a
						});
					});
			});
		});

	};
})( jQuery );
