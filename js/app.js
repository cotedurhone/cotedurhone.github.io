// Define the `leaderboardApp` module
var leaderboardApp = angular.module('leaderboardApp', []);

// Define the `ActiveMinutesController` controller on the `leaderboardApp` module
leaderboardApp.controller('ActiveMinutesController', function ActiveMinutesController($scope, $http) {
	$scope.loadData = function () {
    $http.get('/players.json').
			then(function(response) {
				$scope.loggedIn = response.data.loggedIn || false;
				$scope.players = response.data.players || [];
				if ($scope.players.length == 0) {
					// loading friends list...
					setTimeout($scope.loadData, 3000);
				}
			});
	}

	// initial load
	$scope.loadData();
	setInterval($scope.loadData, 1000*60*5);
});

