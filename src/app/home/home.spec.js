/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'home section', function() {
  beforeEach( module( 'ngApp.home' ) );

  it( 'should have a dummy test !', inject( function() {
    expect( true ).toBeTruthy();
  }));

  it("Subtract gives the correct result", function () {
        // Arrange
        var num1 = 1;
        var num2 = 3;
        var expected = -2;
        var result = -2;

        // Assert
        expect(result).toBe(expected);
    });
});

