import tinycolor from 'tinycolor2';
import { Gradient } from './Gradient';

const COLOR = 0;
const POSITION = 1;

class RadialGradient extends Gradient {

  #type = 'radial';

  constructor({ stops = undefined } = {}) {
    super({ stops })
    this.#type = 'radial';
  }

  get type() {
    return this.#type;
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
    return `radial-gradient(${stops})`;
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
      stops
    }
  }
}

export default RadialGradient;
