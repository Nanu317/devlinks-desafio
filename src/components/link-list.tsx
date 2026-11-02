import { ProfileLink } from "../types/profile"
import { LinkItem } from "./link-items"

type LinkListProps = {
    links: ProfileLink[]
}

export const LinkList = ({ links }: LinkListProps) => {
    return (
        <ul className="flex w-full flex-col gap-4">
            {links.map((link) => (
                <LinkItem key={link.id} title={link.title} url={link.url} />
            ))}
        </ul>
    )
}