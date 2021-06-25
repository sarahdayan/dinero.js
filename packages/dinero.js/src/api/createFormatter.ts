import { toFormat as coreToFormat } from '@dinero.js/core';

import type { ToFormatParams } from '@dinero.js/core';

type CreateFormatterParams<TAmount> = readonly [
  transformer: ToFormatParams<TAmount>[1],
  options?: ToFormatParams<TAmount>[2]
];

/**
 * Create a Dinero object formatter.
 *
 * @param transformer - A transformer function.
 * @param options - Formatting options for the amount transformer.
 *
 * @returns A formatter function.
 */
export function createFormatter<TAmount>(
  ...[
    transformer,
    { digits, round } = {} as ToFormatParams<TAmount>[2],
  ]: CreateFormatterParams<TAmount>
) {
  return function toFormat(dineroObject: ToFormatParams<TAmount>[0]) {
    const formatter = coreToFormat({ calculator: dineroObject.calculator });

    return formatter(dineroObject, transformer, { digits, round });
  };
}