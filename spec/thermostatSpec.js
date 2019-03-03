'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat;
  })
  it('Starts at 20 degrees', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  })
  it('Increases temperature by 1', function () {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  })
  it('Decreases temperature by 1', function () {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  })
})