import { deleteToken, getSavedTokenSync } from './localStorage';

const baseUrl = 'http://localhost:3003';

export const fetchApi = async (input: any, options: any = {}) => {
  const headers = options.headers || {};
  const savedToken = await getSavedTokenSync();
  const url = baseUrl + input;
  let jsonResponse;

  const completeOptions = {
    ...options,
    headers: {
      Accept: 'application/json',
      Authorization: savedToken ? 'Bearer ' + savedToken : null,
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  const res = await fetch(url, completeOptions);

  try {
    jsonResponse = await res.json();
  } catch (e) {
    throw res;
  }

  if (res.status >= 200 && res.status < 300) {
    return jsonResponse;
  } else if (res.status === 401) {
    console.error('AP: not authorized');
    deleteToken();
  } else {
    throw jsonResponse;
  }
};

export const postApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'POST',
    body: JSON.stringify(options.body),
  });

export const deleteApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'DELETE',
    body: JSON.stringify(options.body),
  });

export const patchApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(options.body),
  });

export const putApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(options.body),
  });
