angular.module('backTop', []).

directive('backTop', function(){
	var doc = document;

	return function($scope, $elements, attrs){
		var $window = angular.element(window);

		$elements.on('click', function(){
			doc.documentElement.scrollTop = 0;
			doc.body.scrollTop = 0;
		});

		$window.on('scroll', function(){
			var scrollTop = doc.documentElement.scrollTop||doc.body.scrollTop;

			if(scrollTop > attrs.offset){
				$elements.removeClass('ng-hide');
			}
			else{
				$elements.addClass('ng-hide');
			}
		});

		$window.triggerHandler('scroll');
	}

});
