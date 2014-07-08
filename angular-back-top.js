angular.module('backTop', []).

directive('backTop', function($interval){
	var doc = document;

	return function($scope, $elements, attrs){
		$elements.on('click', function(){
			
			doc.documentElement.scrollTop = 0;
			doc.body.scrollTop = 0;

			hide();
		});

		hide();

		angular.element(window).on('scroll', function(){
			var scrollTop = doc.documentElement.scrollTop||doc.body.scrollTop;

			if(scrollTop>attrs.backTop){
				show();
			}
			else{
				hide();
			}
		});

		function show(){
			var res = hasClass();
			if(!res){
				$elements.css('display', 'block');
			}
			else{
				$elements.removeClass(attrs.hideClass).addClass(attrs.showClass);
			}
			
		}
		function hide(){
			var res = hasClass();
			if(!res){
				$elements.css('display', 'none');
			}
			else{
				$elements.removeClass(attrs.showClass).addClass(attrs.hideClass);
			}
		}
		function hasClass(){
			if(attrs.showClass && attrs.hideClass){
				return true;
			}
		}
	}

});