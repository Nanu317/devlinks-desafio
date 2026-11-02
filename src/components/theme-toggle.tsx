'use client'

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    function toggleTheme() {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button type="button" onClick={toggleTheme} aria-label="Alternar tema claro/escuro"
            className="relative h-10 w-16 cursor-pointer">

            <span className="absolute inset-x-0 top-1/2 h-6 -translate-y-1/2 rounded-full border border-border bg-surface backdrop-blur-[4px] transition-colors duration-300" />

            <span className="absolute top-1 left-0 flex size-8 translate-x-8 items-center justify-center rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:translate-x-0">
                <Sun className="absolute size-4 rotate-0 scale-100 text-black transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-4 rotate-90 scale-0 text-black transition-all duration-300 dark:rotate-0 dark:scale-100" />
            </span>
        </button>
    )
}