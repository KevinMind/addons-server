import { cookies } from "next/headers";

const BASE_URL = 'http://olympia.test/api/v5';

function getAuthHeader(cookie: string) {
  if (cookie.includes('sessionid')) {
    return `Session ${cookie.split('sessionid=')[1].split(';')[0]}`;
  }
  return '';
}

export async function callApi<T = unknown>(url: string, _options: RequestInit = {}): Promise<T> {
  const Cookie = cookies().toString();
  const options = {
    headers: {
      // I should be able to just pass the cookies... but it's not working
      Authorization: getAuthHeader(Cookie),
      Cookie,
      ..._options.headers ?? {},
    },
    ..._options,
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`
      Failed: ${url}. status ${response.status}.
      message ${response.statusText}
      response:headers ${JSON.stringify(response.headers)}
      options ${JSON.stringify(options, null, 2)}
    `);
  }
  return response.json();
}

export const urls = {
  addonsSearch: `${BASE_URL}/addons/search`,
  accountsProfile: `${BASE_URL}/accounts/profile`,
}
