/**
 * @author: Fabian Torres
 * All the things related with the login page
 */
angular.module('ngApp.login', [
	'ui.router',
	'LocalStorageModule'
])

//.constants('STORAGE', 'boilerApp')

.config(['$logProvider', 'localStorageServiceProvider', '$stateProvider', function config($logProvider, localStorageServiceProvider, $stateProvider) {
	//localStorageServiceProvider.setPrefix(STORAGE);
	$logProvider.debugEnabled(false);
	$stateProvider.state('login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/login.tpl.html'
			}
		},
		data:{ pageTitle: 'Login' }
	});
}])

.controller('LoginCtrl',
	['$rootScope',
	 '$scope',
	 '$log',
	 'localStorageService',
	function LoginController($rootScope, $scope, $log, localStorageService) {
		var user = {
			name: 'Fabian',
			username: 'faiverson',
			password: 'pass'
		};
		localStorageService.bind($rootScope, 'user', user);
		$log.log($rootScope.user);
		$scope.user = $rootScope.user;
}]);