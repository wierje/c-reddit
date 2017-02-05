'use strict';

describe('Controller: TopctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('cRedditApp'));

  var TopctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopctrlCtrl = $controller('TopctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopctrlCtrl.awesomeThings.length).toBe(3);
  });
});
