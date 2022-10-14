import { getSavedTokenSync } from './localStorage';

/**
 * Checkea si token el usuario tiene
 * un token en local storage para
 * no hacer request si no existe
 */
export const ifSession =
  fetcher =>
  (...params) => {
    const savedToken = getSavedTokenSync();
    if (savedToken) {
      return fetcher(...params);
    } else {
      throw 'No token on client';
    }
  };
