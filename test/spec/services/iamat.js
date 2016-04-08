'use strict';

describe('Service: iamat', function () {

  // load the service's module
  beforeEach(module('iamatApp'));

  // instantiate service
  var iamat;
  beforeEach(inject(function (_iamat_) {
    iamat = _iamat_;
  }));

  it('should do something', function () {
    expect(!!iamat).toBe(true);
  });

});
