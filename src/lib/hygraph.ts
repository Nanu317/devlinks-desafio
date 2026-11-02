import { Profile } from "../types/profile"

const PROFILE_QUERY = `
  query GetProfile {
    profiles(first: 1) {
      username
      avatarLight {
        url
      }
      avatarDark {
        url
      }
      links {
        id
        title
        url
      }
      socials {
        id
        platform
        url
      }
    }
  }
`

type HygraphResponse = {
    data?: { profiles: Profile[] }
    errors?: { message: string }[]
}

export async function getProfile(): Promise<Profile> {
    const endpoint = process.env.HYGRAPH_ENDPOINT

    if (!endpoint) {
        throw new Error('HYGRAPH_ENDPOINT is not defined')
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: PROFILE_QUERY,
        }),
    })

    const { data, errors }: HygraphResponse = await response.json()

    if (errors) {
        throw new Error(errors[0].message)
    }

    if (!data || data.profiles.length === 0) {
        throw new Error('Profile not found')
    }

    return data.profiles[0]
}