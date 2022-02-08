import tinycolor from 'tinycolor2';

class GradientError extends Error {
  constructor(message) {
    super(message);
    this.name = "GradientError";
  }
}

const defaultStops = [
  ['#0359b5', 0],
  ['#f6ce01', 1]
];

const COLOR = 0;
const POSITION = 1;

class Gradient {
  stops = [];
  limit = null;

  constructor({ stops = defaultStops, limit = null } = {}) {
    this.stops = stops;
    this.limit = limit;
  }

  get stops() {
    return this.stops;
  }

  set stops(value) {
    const error = Gradient._stopArrayValidator(value);
    if (error) {
      throw new GradientError(`Wrong stops format, ${error}`);
    }
    this.stops = value;
  }

  get limit() {
    return this.limit;
  }

  static _stopPointValidator(value) {
    if (!Array.isArray(value)) {
      return 'point must be an array';
    }
    if (value.length !== 2) {
      return 'wrong point format';
    }

    const position = value[POSITION];
    if (typeof position !== 'number') {
      return 'position must be a number';
    }
    if (position !== Number(position)) {
      return 'position must be a number';
    }
    if (position < 0) {
      return 'position must be between 0 and 1';
    }
    if (position > 1) {
      return 'position must be between 0 and 1';
    }

    const color = tinycolor(value[COLOR]);
    if(!color.isValid()) {
      return 'color is invalid';
    }

    return null;
  }

  static _stopArrayValidator(value) {
    if (!Array.isArray(value)) {
      return 'must be an array';
    }
    if (value.length < 2) {
      return 'wrong array format';
    }

    return null;
  }

  addStop(value) {
    if (this.limit && this.stops.length >= this.limit) {
      throw new GradientError('Too many stop points');
    }
    const error = Gradient._stopPointValidator(value);
    if (error) {
      throw new GradientError(`Wrong stop format, ${error}`);
    }

    this.stops.push(value);
  }

  removeStopByIndex(index) {
    if (this.stops.length < 3) {
      throw new GradientError('Can\'t remove stop point');
    }

    if (this.stops.length <= index) {
      throw new GradientError('Can\'t remove stop point');
    }

    this.stops.splice(index, 1);
  }
}

export { Gradient, GradientError };
