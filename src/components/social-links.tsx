import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { IconType } from "react-icons"
import { SocialLink, SocialPlatiform } from "../types/profile"

const icons: Record<SocialPlatiform, IconType> = {
    GITHUB: FaGithub,
    INSTAGRAM: FaInstagram,
    YOUTUBE: FaYoutube,
    LINKEDIN: FaLinkedin,
}

const labels: Record<SocialPlatiform, string> = {
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
        <ul className="flex items-center gap-4">
            {socials.map((social) => {
                const Icon = icons[social.platform]

                return (
                    <li key={social.id}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={labels[social.platform]} className="flex size-12 items-center justify-center rounded-full transition-colors hover:bg-surface-hover">
                            <Icon className="size-6" />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
