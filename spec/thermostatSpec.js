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
  it('Has a min temperature of 10', function () {
    for(var i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  })
  it('Has power saving mode on by default', function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })
  it('Can switch power saving mode off', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  })
})