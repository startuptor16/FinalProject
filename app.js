(function(){
	angular.module('RecipeBox', ['ngRoute']);
						//inject  , 'ngSanitize' in []

	angular
		.module('RecipeBox')
		.config(function($routeProvider) {
		$routeProvider

			.when ('/home', {
				templateUrl: 'Main.html', 
				controller: 'MainCtrl as ctrl'
			})
			.when ('/Cuisines/:CuisinesId', {
				templateUrl: 'Cuisine.html', 
				controller: 'Cuisines as ctrl'
			})
			.when ('/meals/:CuisinesId/:mealsId', {
				templateUrl: 'Meals.html', 
				controller: 'MealCtrl as ctrl'
			})
			.otherwise ({
				redirectTo: '/home'
			})
		})

})();
