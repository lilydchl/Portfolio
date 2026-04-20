import Tempus, { type TempusCallback, type TempusOptions } from 'tempus';

export { Tempus };

export function addToTempus(callback: TempusCallback, options?: TempusOptions) {
  return Tempus.add(callback, options);
}
