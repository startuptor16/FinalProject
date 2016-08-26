(function(){

	 angular
        .module('RecipeBox')
        .service('RecipeBoxSrv', RecipeBoxSrv);

        function RecipeBoxSrv(){
        	console.log('RecipeBox Service Function Loaded')
        	var self= this;
        	self.AmericanFood= AmericanFood;
        	console.log(self.AmericanFood);
        	self.MexicanFood= MexicanFood;
        	self.IndianFood= IndianFood;
        	self.getMeals=getMeals;
        	self.getCuisine=getCuisine;

        	
 			function getCuisine(Name){
	        	console.log('getCuisine function working', Name)
	        	if (Name === 'American'){
	        		console.log('AmericanFood', self.AmericanFood);
	        		return self.AmericanFood;
	        	} else if (Name === 'Mexican'){
	        		return self.MexicanFood;
	        	} else if (Name === 'Indian'){
	        		return self.IndianFood;
	        	}
	   		}


	        function getMeals(Cuisine, Name){
	          console.log('Recipes function running')
	          console.log("cuisine", Cuisine)
	          console.log("name", Name);
	          console.log(self.AmericanFood)
	          for (var i=0; i < self.AmericanFood.length; i++){
	          	console.log("i", i)
	            if (self.AmericanFood[i].Name == Name){
	            	console.log("AmericanFood found")
	              self.item = (self.AmericanFood[i]);
	              console.log(self.item)
	              return self.item;
	            }
	            else if (self.MexicanFood[i].Name == Name){
	            		console.log("MexicanFood found")
	            	self.item = (self.MexicanFood[i]);
	              	console.log(self.item)
	              	return self.item;
	            }
	            else if (self.IndianFood[i].Name == Name){
	            	console.log("IndianFood found")
	            	self.item = (self.IndianFood[i]);
	              console.log(self.item)
	              return self.item;
	          	}
	        }
		}

	}   


		var AmericanFood = [{
			"Cuisine":"American",
	        "Name": "Steak and Avacado Salad",
	     	"Prep Time": "15 Minutes",
	      	"Cook Time": "30 minutes ",
	      	"Servings": "2-4",
	      	"Image": "http://usedbookstorevn.com/wp-content/uploads/2016/06/mix-1-e1466381515734.jpg",
	      	"Video": "https://youtu.be/9RyTA9pwnyA",
	      	"Ingredients": 
	      		{"Sirloin steak": "1 Lbs, about 1/2 inch thick", 
	      		"Salt & Pepper": "",
	      		"Extra Virgin Olive Oil": "2 Tablespoons",
	      		"Romaine Lettuce": "2 hearts",
	      		"Diced Hard-Boiled Eggs": "3",
	      		"Avocados": "2",
	      		"Cherry Tomatoes": "2 cups",
	      		"Caesar Dressing": "3 Tablespoons"}
	      		,
			"Directions": 
				[
				"Salt and pepper the steak on both sides, being sure to rub in the seasoning.", 
				"Heat the oil in a pan over high heat until slightly smoking.", 
				"Sear the steak for about 2 minutes per side, then rest it on a cutting board for 10 minutes.",
				"Slice the steak.",
				 "In a large bowl, combine the lettuce, eggs, avocados, cherry tomatoes, steak, and dressing, tossing the salad until evenly coated.",
				"Serve!"]
	        }, 

	        {
	        "Cuisine":"American",
	        "Name": "Stuffed Chicken Parmesan",
	     	"Prep Time": "20 Minutes",
	      	"Cook Time": "35 minutes ",
	      	"Servings": "3",
	      	"Image": "http://citylife.am/wp-content/uploads/2016/07/maxresdefault-10-678x381.jpg",
	      	"Video": "https://www.youtube.com/watch?v=n2leVinuQeo",
	      	"Ingredients": 
	      		{"Chicken Breast, Boneless & Skinless": "3 ", 
	      		"Salt": "Add to taste",
	      		"Beaten Eggs": "6 eggs",
	      		"Breadcrumbs": "2 cups",
	      		"Mozzarella": "1 cup",
	      		"Oil": "1 cup to fry",
	      		"Tomatoe Sauce": "3 cups",
	      		"Parmesan": "1/2 cup",
	      		"Marinara Sauce": "According to Personal Preference"
	      	
	      		},
	      			      		
			"Directions": 
				[
				 "Cut a pocket into each chicken breast.",					
				 "Stuff the pockets evenly with the mozzarella cheese.",			
				 "Press the edges of the chicken together to seal the pocket.",			
				 "Separate the flour, eggs, and bread crumbs into 3 separate bowls.",												
				 "Being careful to keep the chicken from opening, dip the stuffed chicken in the flour, shaking off the excess.",
				 "Dip the floured chicken into the egg, then the bread crumbs, coating it evenly.",
				 "Heat the oil in a large pan over medium heat. Preheat oven to 180°C.",
				 "Fry the chicken until golden brown on both sides.",												
				 "Place ⅔ of the tomato sauce evenly on the bottom of a baking dish. Place the chicken on top.",
				 "Top with the rest of the tomato sauce, then sprinkle the parmesan and basil on top.",
				 "Bake for 20 minutes."
 				]	
	        }, 
	        {
	        "Cuisine":"American",
	        "Name": "Black Bean Burger ",
	     	"Prep Time": "15 Minutes",
	      	"Cook Time": "20 minutes ",
	      	"Servings": "4",
	      	"Image": "http://www.formerchef.com/wp-content/uploads/2012/09/QuinoaBlackBeanBurger2.jpg",
	      	"Video": "https://www.youtube.com/watch?v=9OMunBJ8egE",
	      	"Ingredients": 
	      		{"Black Beans": "2 cans", 
	      		"Minced Onion": "1",
	      		"Minced Garlic Cloves": "3",
	      		"Shredded Carrots": "",
	      		"Quick Oats": "1/2 cup",
	      		"Soy Sauce": "1 Tablespoon",
	      		"Olive Oil": "1 Tablespoon",
	      		"Cumin": "1 teaspoon",
	      		"Corainder": "1/2 teaspoon",
	      		"Chili Powder": "1/2 teaspoon",
	      		"Cayenne Pepper": "1/4 teaspoon",
	      		"Salt and Pepper": "Add to taste"
	      	},

	      
			"Directions": 
				[
				"Heat one tablespoon of olive oil in a pan." , 
				" Combine onions, garlic, salt, and pepper and cook until onions are translucent.", 
				"Add carrots, cumin, coriander, chili powder, and cayenne pepper until carrots are tender.",
				"Remove pan from heat.",
				"In a bowl, mash the beans and then add the contents of the pan along with the soy sauce and quick oats.",
				"Mix and form four patties.",
				"Place in freezer for 30 minutes to set.",
				"Cook patties on a pan coated in cooking spray over medium heat, flipping halfway.",
				"Use patties to create your dream veggie burger."
				]

	        }];


	        var MexicanFood = [{
	        "Cuisine":"Mexican",
	      	"Name": "Chicken Fajita Bombs",
	     	"Prep Time": "25 Minutes",
	      	"Cook Time": " 20 minutes ",
	      	"Servings": "3",
	      	"Image": "http://www.digiwidgy.com/wp-content/uploads/2016/04/maxresdefault153.jpg",
	      	"Video": "https://www.youtube.com/watch?v=HSo-clxgy0Q",
	      	"Ingredients": {
	      					"Canola Oil": "2 TableSpoons", 
	      					"Diced Red Pepper": "1",
	      					"Diced Green Pepper": "1 ",
	      					"Diced Yellow Pepper": "1", 
	      					"Onion": "1",
	      					"Salt": "3 teaspoons",
	      					"Ground Black Pepper": "1 teaspoon",
	      					"Cream Cheese": "4 ounces",
	      					"Cheddar Cheese": "1/2 cup",
	      					"Boneless Chicken": "3", 
	      					"Chili Powder":"2",
	      					"Cumin": "2 teaspoons",
	      					"Garlic Pepper": "2 teaspoons", 
	      					"Canola Oil": "3 Tablespoons",
	      					"Salsa": "Side Serving ",
	      					"Sour Cream": "Side Serving ",
	      					"Salsa": "Side Serving",
	      					"Gaucamole": "Side Serving"
	      					},

	      	"Directions": [
	      					"Heat the canola oil in a pan over high heat. Cook the peppers, onion, salt, and pepper until soft and slightly caramelized. Transfer the cooked veggies to a bowl.",
	      					"In the same bowl, mix in the cream cheese, cheddar, and pepper jack, stirring until evenly incorporated. Set aside.",
	      					"In a separate bowl, combine the chicken with the salt, chili powder, cumin, and garlic powder, evenly distributing the spices over the chicken",
	      					" On a cutting board, slice a pocket in the chicken horizontally and fill the pocket with a heaping spoonful of the veggie mixture. Press the edges of the chicken together to seal in the filling. Repeat with the remaining chicken.",
	      					"Heat the canola oil in a pan over medium heat. Cook the stuffed chicken for five minutes on each side, until cheese is melted and chicken is cooked through",
	      					"Serve with salsa, sour cream, and guacamole!"
	      					]
	      	

	        }, {
	        "Cuisine":"Mexican",
	        "Name": "Creamy Jalepeno Chicken Tequitos",
	     	"Prep Time": "35 Minutes",
	      	"Cook Time": "20 minutes ",
	      	"Servings": "4",
	      	"Ingredients": "pear: 2",
	      	"Directions": "cook"

	        }, {
	        "Cuisine":"Mexican",
	        "Name": "Carnitas for Tacos",
	     	"Prep Time": "35 Minutes",
	      	"Cook Time": "20 minutes ",
	      	"Servings": "4",
	      	"Ingredients": "oats: 2",
	      	"Directions": "cook"


	        }];



	        var IndianFood = [{
	        	 "Cuisine":"Indian",
	        	 "Name": "Palak Paneer",
	     		 "Prep Time": "20 minutes",
	      		 "Cook Time": "20 minutes ",
	      	     "Servings": "4",
	      		 "Image": "http://www.desitwistrecipes.com/images/recipes/Main/LARGE/Palak-Paneer.jpg",
	      		 "Video": "https://www.youtube.com/watch?v=BTI6RggETEQ",
	      		 "Ingredients": {"Spinach": "6-7 cups",
	      						"Water": "7-8 cups",
	      						"Onion": "1 cup sliced",
	      						"Cashew Nuts": "1/4 cup",
	      						"Green Chillies": "4-5",
	      						"Paneer": "200 grams",
	      						"Oil": "2 Tablespoons",
	      						"Cumin": "1 teaspoon",
	      						"Ginger paste": "1 teaspoon",
	      						"Garlic paste": "1 teaspoon",
	      						"Finely Chopped Tomatoes": "1/4 cup",
	      						"Salt": "1 teaspoon or add to taste ",
	      						"Dried Fenugreek leaves": "1 tsp",
	      						"Garam Masala": "1 teaspoon or add to taste",
								},

	      		 "Directions": 
	      		 ["Wash spinach properly and chop the leaves.",
	      		 "Boil 7-8 cups of water, add chopped spinach. Let it cook for 3 minutes exactly and strain. Rinse with cold water (it helps in keeping bright green color intact). ",
	      		 "In a blender, puree the spinach without adding water and set aside. ",
	      		 "Take 1 tsp oil, add sliced onion and fry until soft and translucent. In a blender add softened onion, cashew nuts and green chilies and blend until a smooth paste.",
	      		 "Heat 1 tbs oil in a pan on medium heat and add cumin seeds. Add ginger garlic paste and sauté for 30 seconds. Add tomatoes and cook until soft. Add onion paste and cook for 2 minutes. ",
	      		 "Add spinach puree, black salt, dried fenugreek leaves, garam masala and salt. Mix well and cook for 5-6 mins. Add water if gravy is too thick.",
	      		 "Cut ½ inch cubes of paneer and shallow fry them in a pan. (This step is optional)",
	      		 "Add paneer cubes in the spinach gravy and simmer for 2-3 minutes.",
	      		 "Palak Paneer is ready to serve."
	      		 ]


	        }, {


	        }, {


	        }];	       

	        

})();





