import Image from 'next/image'
type AvatarProps = {
    lightSrc: string,
    darkSrc: string,
    username: string
}

export function Avatar({ lightSrc, darkSrc, username }: AvatarProps) {
    const imageClass = 'size-28 rounded-full object-cover'
    return (
        <div className='flex flex-col items-center gap-2 p-6'>
            <Image src={lightSrc} width={112} height={112} className={`${imageClass} dark:hidden`} alt={username} />
            <Image src={darkSrc} width={112} height={112} className={`${imageClass} hidden dark:block`} alt={username} />
            <h1 className='text-base font-normal'>@{username}</h1>
        </div>
    )
}