describe('ngApp', function() {
	beforeEach(module('ngApp'));

	describe('AppCtrl', function() {
		var AppCtrl, $location, $scope;

		beforeEach(inject( function( $controller, _$location_, $rootScope ) {
			$location = _$location_;
			$scope = $rootScope.$new();
			AppCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope });
		}));

		it('Controller should not be undefined', inject( function() {
			console.log(AppCtrl);
			expect(AppCtrl).not.toBeUndefined();
		}));

		it('pageTitle should not be null', inject(function() {
			console.log(AppCtrl);
			//expect(AppCtrl.$scope.pageTitle).notBeNull();
		}));

	});
});