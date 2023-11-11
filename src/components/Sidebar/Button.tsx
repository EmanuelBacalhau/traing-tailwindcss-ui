import { ReactNode } from "react"

type Props = {
  children: ReactNode
  active: boolean
}

export function Button({ active, children }: Props) {
  const bgColor = active ? 'bg-zinc-200 dark:bg-zinc-900' : ''

  return (
    <button
      className={`
        py-2 px-4
        w-full
        rounded-lg
        text-start
        hover:bg-zinc-200 dark:hover:bg-zinc-900
        transition-colors
        ${bgColor}
      `}
    >
      {
        children
      }
    </button>
  )
}