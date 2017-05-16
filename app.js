(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', DIController);


DIController.$inject = ['$scope'];
function DIController($scope) {
	$scope.lunsj = "";
	$scope.message = "";

	$scope.checkLunch = function() {
		var foods = filterFoods($scope.lunsj.split(","));
		// console.log("listelengde:", foods.length)
		if (foods.length == 0) {
			$scope.message = "Please enter data first"
		} else if (foods.length > 3) {
			$scope.message = "Too much!";
		} else {
			$scope.message = "Enjoy!";
		} 
	}
};

function filterFoods(list) {
	return list.filter(function(food) {
		return (food.trim() != "")
	});
}

})();
	