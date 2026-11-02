import { Profile } from "../types/profile";

export const mockProfile: Profile = {
    username: 'Fernando',
    avatarLight: { url: '/avatar-light.jpg' },
    avatarDark: { url: '/avatar-dark.jpg' },
    links: [
        { id: '1', title: 'Meu portfólio', url: 'https://rocketseat.com.br' },
        { id: '2', title: 'Meu GitHub', url: 'https://github.com/' },
        { id: '3', title: 'Meu Blog', url: 'https://site-blog-curso-de-next-js.vercel.app/' },
        { id: '4', title: 'Meu YouTube', url: 'https://www.youtube.com/@rocketseat' },
    ],
    socials: [
        { id: '1', platform: 'GITHUB', url: 'https://github.com/' },
        { id: '2', platform: 'YOUTUBE', url: 'https://www.youtube.com/@rocketseat' },
        { id: '3', platform: 'INSTAGRAM', url: 'https://www.instagram.com/rocketseat/' },
        { id: '4', platform: 'LINKEDIN', url: 'https://www.linkedin.com/school/rocketseat/' }
    ]
}
