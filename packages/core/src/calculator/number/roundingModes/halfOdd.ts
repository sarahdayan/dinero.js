import { RoundingMode } from '../../types';
import { isEven, isHalf } from '../helpers';

/**
 * Round a number with half values to nearest odd integer.
 *
 * @param value The number to round.
 *
 * @returns The rounded number.
 */
export const halfOdd: RoundingMode<number> = (value) => {
  const rounded = Math.round(value);

  if (!isHalf(value)) {
    return rounded;
  }

  return isEven(rounded) ? rounded - 1 : rounded;
};