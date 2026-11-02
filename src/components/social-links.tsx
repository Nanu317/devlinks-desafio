import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import type { IconType } from "react-icons"
import { SocialLink, SocialPlatform } from "../types/profile"

const icons: Record<SocialPlatform, IconType> = {
    GITHUB: FaGithub,
    INSTAGRAM: FaInstagram,
    YOUTUBE: FaYoutube,
    LINKEDIN: FaLinkedin,
}

const labels: Record<SocialPlatform, string> = {
    GITHUB: "GitHub",
    INSTAGRAM: "Instagram",
    YOUTUBE: "YouTube",
    LINKEDIN: "LinkedIn",
}

type SocialLinksProps = {
    socials: SocialLink[]
}

export function SocialLinks({ socials }: SocialLinksProps) {
    return (
        <ul className="flex justify-center gap-4 p-6">
            {socials.map((social) => {
                const Icon = icons[social.platform]

                return (
                    <li key={social.id}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={labels[social.platform]} className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-surface-hover">
                            <Icon className="size-6" />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
