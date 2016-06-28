
'use strict';

// Initialize App
var app = angular.module('zillowApp', []);

// Value from Select Menu will be passed into the API GET request URL 
var stateSelected = document.getElementById('stateSelection');
console.log(stateSelected.text);

// Initialize Controller
app.controller('zillowCtrl', ['$scope', '$http', function ($scope, $http) {

	$scope.stateBinding = '';
	$scope.stateName = '';

	$scope.states = [
		{code: "", name: ''}, 
		{code: "CA", name: 'California'},
		{code: "CO", name: 'Colorado'},
		{code: "OR", name: 'Oregon'},
		{code: "TX", name: 'Texas'},
		{code: "WA", name: 'Washington'},
	];

	var getStateName = function(stateCode) {
		for (var i = 0; i < $scope.states.length; i++) {
			if ($scope.states[i].code == stateCode) {
				return $scope.states[i].name;
			}
		}
		return '';
	}

    var updateData = function(stateSelected) {
		$http.jsonp('http://www.zillow.com/webservice/GetRateSummary.htm?zws-id=X1-ZWz1fc3cu2jq4r_3wguv&state=' + stateSelected + '&output=json&callback=JSON_CALLBACK')
			.success(function (result) {
				$scope.mortgageLocation = result;
				console.log('success!');
			 	console.log(result);
			})
			.error(function (data, status) {
			 	console.log('error!');
				console.log(data);
			});
    }

	$scope.changeState = function(){
		console.log('stateSelected is ' + $scope.stateBinding);
		$scope.stateName = getStateName($scope.stateBinding);	

		// If NOT an empty string, then update value	
		if ($scope.stateBinding) {
			updateData($scope.stateBinding);
		}
		var stateSelected = document.getElementById('stateSelection');
		console.log(stateSelected.text);
	}

}]);

