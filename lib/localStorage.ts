const storage =
  typeof window == 'undefined'
    ? {
        getItem: () => {},
        setItem: () => {},
        removeItem: () => {},
      }
    : window.localStorage;

const TOKEN_KEY = 'auth_token';

const getSavedTokenSync = () => storage.getItem(TOKEN_KEY);

const deleteToken = () => storage.removeItem(TOKEN_KEY);

const saveToken = token => storage.setItem(TOKEN_KEY, token);

export { getSavedTokenSync, deleteToken, saveToken };
