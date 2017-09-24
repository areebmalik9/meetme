'use strict';

angular.module('meetme')
.controller('ResultCtrl', function($scope, $http) {

	$scope.search = "";
	$scope.locationSearched ="";
	$scope.API_KEY="AIzaSyDKeEzciGEtGNwvo7hXDmP0SRh_ybDFvlY";

	$scope.init = function() {
		$scope.startLocation = sessionStorage.startLocation;
		$scope.endLocation = sessionStorage.endLocation;
    $scope.user = sessionStorage.user;

    console.log($scope.startLocation)
    console.log($scope.endLocation)
    console.log($scope.user)
  };

  function initMap() {
    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService;
  }

  $scope.init();
});