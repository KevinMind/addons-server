import { callApi, urls } from '@/app/utils';

import type { Addon } from './types'

export async function getAddons(): Promise<{ addons: Addon[] }> {
  const {results} = await callApi<{ results: Addon[] }>(urls.addonsSearch)

  return {
    addons: results,
  }
}
