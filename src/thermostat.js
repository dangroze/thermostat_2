'use strict';

function Thermostat () {
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this._powerSavingMode = true;
}
Thermostat.prototype = {
  currentTemperature: function () {
    return this._temperature;
  },
  up: function () {
    this._temperature += 1;
  },
  down: function () {
    if(this.isMinTemp()) {
      return this.MIN_TEMPERATURE;
    }
    this._temperature -= 1;
  },
  isMinTemp: function () {
    return this._temperature === this.MIN_TEMPERATURE;
  },
  isPowerSavingModeOn: function () {
    return this._powerSavingMode === true;
  },
  switchPowerSavingModeOff: function () {
    this._powerSavingMode = false;
  },
  switchPowerSavingModeOn: function () {
    this._powerSavingMode = true;
  }
}