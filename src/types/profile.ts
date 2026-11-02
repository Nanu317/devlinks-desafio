export type ProfileLink = {
    id: string,
    title: string,
    url: string
}

export type SocialPlatform = 'GITHUB' | 'YOUTUBE' | 'INSTAGRAM' | 'LINKEDIN'

export type SocialLink = {
    id: string,
    platform: SocialPlatform,
    url: string
}

export type Profile = {
    username: string,
    avatarLight: { url: string },
    avatarDark: { url: string },
    links: ProfileLink[],
    socials: SocialLink[]
}