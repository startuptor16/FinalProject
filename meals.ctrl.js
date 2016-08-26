(function(){
	angular 
		.module('RecipeBox')
		.controller('MealCtrl', Meals);

	function Meals($routeParams, RecipeBoxSrv, $location){
									// inject $sce in ()
		var Recipes= this;
		console.log($routeParams);

		Recipes.CuisineOptions= RecipeBoxSrv.getMeals($routeParams.CuisinesId, $routeParams.mealsId)  
			// getCuisine is a function to set up an object in an array and call an item
			console.log(Recipes.CuisineOptions.Ingredients)
			console.log(Recipes.CuisineOptions.Directions)
			console.log(Recipes.CuisineOptions)
	

		Recipes.cuisinePage = cuisinePage;

		function cuisinePage(cuisineName){
			console.log("cuisinePage")
			$location.path('/Cuisines/'+ cuisineName ) 
		}

		// Recipes.getVideo = function() {
		// 	return $sce.trustAsResourceUrl(Recipes.CuisineOptions.Video)
		// }

		
	}

})();