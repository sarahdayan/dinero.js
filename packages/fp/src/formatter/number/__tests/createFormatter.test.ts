import { USD } from '@dinero.js/currencies';
import { up } from '@dinero.js/core/calculator/number';
import { createFormatter } from '../../../formatter';
import { Dinero } from '../../..';

describe('createFormatter', () => {
  it('formats the functional Dinero object with the passed transformer', () => {
    const format = createFormatter(
      ({ amount, currency }) => `${currency.code} ${amount}`
    );

    const d = Dinero({ amount: 500, currency: USD });

    expect(format(d)).toBe('USD 5');
  });
  it('formats the functional Dinero object with the passed transformer and options', () => {
    const formatOptions = {
      digits: 1,
      roundingMode: up,
    };
    const format = createFormatter(
      ({ amount, currency }) => `${currency.code} ${amount}`,
      formatOptions
    );

    const d = Dinero({ amount: 4545, currency: USD });

    expect(format(d)).toBe('USD 45.5');
  });
});
