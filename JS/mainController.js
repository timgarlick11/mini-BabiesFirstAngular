var app = angular.module('friendsList');

app.controller("mainController", function($scope){
	$scope.friends = ["Natalie", "Olive", "Mike"];
});