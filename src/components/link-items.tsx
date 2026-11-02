type LinkItemProps = {
    title: string,
    url: string
}

export function LinkItem({ title, url }: LinkItemProps) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full rounded-lg border border-border bg-surface px-6 py-4 text-center text-base font-medium transition-colors hover:bg-surface-hover backdrop-blur-[4px]">{title}</a>
        </li>
    )
}