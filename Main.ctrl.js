(function(){
	angular 
		.module('RecipeBox')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl( RecipeBoxSrv, $location){
		var CuisineOptions= this;


		CuisineOptions.FetchCuisine=FetchCuisine;



		function FetchCuisine(ID){
			$location.path('/Cuisines/'+ID) 
		}

		// function FetchCuisine2(ID){
		// 	$location.path('/Cuisines/'+ID) 
		// }

		// function FetchCuisine3(ID){
		// 	$location.path('/Cuisines/'+ID) 
		// }
		

	}

})();