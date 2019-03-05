'use strict';

function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this._powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}
Thermostat.prototype = {
  currentTemperature: function () {
    return this._temperature;
  },
  up: function () {
    if(this.isMaxTemp()) {
      return;
    }
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
  },
  isMaxTemp: function () {
    if(this.isPowerSavingModeOn() === false){
      return this._temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this._temperature === this.MAX_LIMIT_PSM_ON;
  },
  reset: function () {
    this._temperature = this.DEFAULT_TEMPERATURE;
  }
}