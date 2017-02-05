'use strict';

describe('Service: FBCreds', function () {

  // load the service's module
  beforeEach(module('cRedditApp'));

  // instantiate service
  var FBCreds;
  beforeEach(inject(function (_FBCreds_) {
    FBCreds = _FBCreds_;
  }));

  it('should do something', function () {
    expect(!!FBCreds).toBe(true);
  });

});
