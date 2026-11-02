export type ProfileLink = {
    id: string,
    title: string,
    url: string
}

export type SocialPlatiform = 'GITHUB' | 'YOUTUBE' | 'INSTAGRAM' | 'LINKEDIN'

export type SocialLink = {
    id: string,
    platform: SocialPlatiform,
    url: string
}

export type Profile = {
    username: string,
    avatarLight: { url: string },
    avatarDark: { url: string },
    links: ProfileLink[],
    socials: SocialLink[]
}