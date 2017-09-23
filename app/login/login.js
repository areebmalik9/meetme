'use strict';

angular.module('meetme')
.controller('LogInCtrl', function($scope, $location, $http) {
	console.log("test");


	$scope.login = function($valid) {

		console.log("Login");
		console.log("Username: " + $scope.username);
		console.log("Password: " + $scope.password);
		
		if($valid){
			
		console.log("output " + $scope.password);
			var request = {
				username: $scope.username,
				password: $scope.password
			};
			
			$http.post('http://localhost:3000/login', request)
			.success(function(res){
				console.log(res);
			}).error(function(err){
				console.log(err);
				console.log("Username or password is wrong.");
			});

			
		}
	};

	$scope.signUp = function($valid) {

		console.log("Signup");
		console.log("Username: " + $scope.username);
		console.log("Password: " + $scope.password);
		
		if($valid){
			
			var request = {
				username: $scope.username,
				password: $scope.password
			};
			
			$http.post('http://localhost:3000/signup', request)
			.success(function(res){
				console.log(res);
			}).error(function(err){
				console.log(err);
				console.log("User already exists.");
			});

			
		}
	};

	$scope.google = function($valid) {

		console.log("Signup");
		console.log("Username: " + $scope.username);
		console.log("Password: " + $scope.password);
		
		if($valid){
			
			var request = {
				username: $scope.username,
				password: $scope.password
			};
			
			$http.post('http://localhost:3000/signup', request)
			.success(function(res){
				console.log(res);
			}).error(function(err){
				console.log(err);
				console.log("User already exists.");
			});

			
		}
	};

	


});

