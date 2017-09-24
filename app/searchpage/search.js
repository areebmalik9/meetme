'use strict';

var h = screen.height;
var w = screen.width;
angular.module('meetme')
.controller('SearchCtrl', function($scope, $location) {
	$scope.startLocationSearch = "";
	$scope.endLocationSearch = "";
  $scope.user = "";
	$scope.startLocation = "";
  $scope.endLocation = "";
	$scope.submitted = false;

	$scope.directPage = function(valid) {
		$scope.submitted = true;
    console.log(valid);
		if (valid) {
			// $scope.location = {
			// 	latitude: 43.260846,
			// 	longitude: -79.919215
			// }
			sessionStorage.setItem('startLocation', $scope.startLocation);
      sessionStorage.setItem('endLocation', $scope.endLocation);
			sessionStorage.setItem('user', $scope.user);
			// sessionStorage.setItem('location', JSON.stringify($scope.location));
			$location.path('result');
		}
	};







	var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var acOptions = {
  types: ['establishment']
};
var startLocationAutoComplete = new google.maps.places.Autocomplete(document.getElementById('startLocation'),acOptions);
startLocationAutoComplete.bindTo('bounds',map);
var endLocationAutoComplete = new google.maps.places.Autocomplete(document.getElementById('endLocation'),acOptions);
endLocationAutoComplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();
var marker = new google.maps.Marker({
  map: map
});

google.maps.event.addListener(startLocationAutoComplete, 'place_changed', function() {
  infoWindow.close();
  var place = startLocationAutoComplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  $scope.startLocation = place.geometry.location;
  console.log($scope.startLocation);
  console.dir(place.geometry);
  // marker.setPosition(place.geometry.location);
  // infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  // infoWindow.open(map, marker);
  // google.maps.event.addListener(marker,'click',function(e){

  //  // infoWindow.open(map, marker);

  // });
});

google.maps.event.addListener(endLocationAutoComplete, 'place_changed', function() {
  infoWindow.close();
  var place = endLocationAutoComplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  $scope.endLocation = place.geometry.location;
  console.dir(place.geometry);
  // marker.setPosition(place.geometry.location);
  // infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  // infoWindow.open(map, marker);
  // google.maps.event.addListener(marker,'click',function(e){

  //  // infoWindow.open(map, marker);

  // });
});

});