'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat;
  })
  it('Starts at 20 degrees', function() {
    expect(thermostat._temperature).toEqual(20);
  })
})