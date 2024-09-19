import { callApi, urls } from './utils'
import type { Profile } from './types'

export async function getProfile() {
  let profile: Profile | null = null;
  try {
    profile = await callApi<Profile>(urls.accountsProfile)
  } catch (e) {
    console.error(e)
  }

  return {
    profile,
  }
}
