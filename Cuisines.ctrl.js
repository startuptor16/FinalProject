(function(){
	angular 
		.module('RecipeBox')
		.controller('Cuisines', Cuisines);

	function Cuisines($routeParams, RecipeBoxSrv, $location){
		var Meals= this;

        Meals.LoadCuisines= RecipeBoxSrv.getCuisine($routeParams.CuisinesId)
        		// url tag defined as a parameter in  getCuisine in srv


		Meals.FetchMeal=FetchMeal;

		function FetchMeal(ID){
			$location.path('/meals/'+$routeParams.CuisinesId + '/' + ID) 
		}


		Meals.GoHome= GoHome;

		function GoHome(){
			$location.path('/home') 

		}

	}

})();