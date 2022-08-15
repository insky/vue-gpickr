import tinycolor from 'tinycolor2';
import { Gradient, GradientError } from './Gradient';

const COLOR = 0;
const POSITION = 1;

class LinearGradient extends Gradient {
  _type = 'linear';
  _angle = null;

  constructor({ angle = 0, stops = undefined, limit = undefined } = {}) {
    super({ stops, limit })
    this._type = 'linear';
    this._angle = angle;
  }

  get angle() {
    return this._angle;
  }

  set angle(value) {
    const error = LinearGradient._angleValidator(value);
    if (error) {
      throw new GradientError(`Wrong angle value, ${error}`);
    }
    this._angle = value;
  }

  get type() {
    return this._type;
  }

  static _angleValidator(value) {
    if (typeof value !== 'number') {
      return 'must be a number';
    }
    if (value !== Number(value)) {
      return 'must be a number';
    }
    if (value < 0) {
      return 'must be between 0 and 360';
    }
    if (value > 360) {
      return 'must be between 0 and 360';
    }
    return null;
  }

  toString(colorFormat = 'hex8') {
    const stops = this.stops
                    .slice()
                    .sort((a, b) => a[POSITION] - b[POSITION])
                    .map(stop => `${tinycolor(stop[COLOR]).toString(colorFormat)} ${(stop[POSITION] * 100).toFixed()}%`)
                    .join(', ');
    return `linear-gradient(${this.angle}deg, ${stops})`;
  }

  toRaw(colorFormat = 'hex8') {
    const stops = this.stops
                    .slice()
                    .sort((a, b) => a[POSITION] - b[POSITION])
                    .map(stop => {
                      stop[COLOR] = tinycolor(stop[COLOR]).toString(colorFormat);
                      return stop;
                    });
    return {
      type: this.type,
      angle: this.angle,
      stops,
      limit: this.limit
    }
  }
}

export default LinearGradient;
