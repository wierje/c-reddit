'use strict';

describe('Service: ThingsFactory', function () {

  // load the service's module
  beforeEach(module('cRedditApp'));

  // instantiate service
  var ThingsFactory;
  beforeEach(inject(function (_ThingsFactory_) {
    ThingsFactory = _ThingsFactory_;
  }));

  it('should do something', function () {
    expect(!!ThingsFactory).toBe(true);
  });

});
