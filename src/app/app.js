angular.module( 'ngApp', [
	'templates-app',
	'templates-common',
	'ngApp.home',
	'ngApp.about',
	'ngApp.login',
	'ui.router'
])

.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function myAppConfig ($logProvider, $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/login' );
	$logProvider.debugEnabled(true);
}])

.run( function run() {
})

.controller('AppCtrl', [
	'$scope',
	'$log',
	'$location',
	function AppCtrl($scope, $log, $location) {
		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
			if ( angular.isDefined( toState.data.pageTitle ) ) {
				$scope.pageTitle = toState.data.pageTitle + ' | Angular BP' ;
			}
		});
		$log.debug('App started');
}]);