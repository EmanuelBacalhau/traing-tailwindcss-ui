import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function Container({children}: Props) {
  return (
    <div
      className="
        bg-zinc-100 dark:bg-zinc-800
        text-zinc-900 dark:text-zinc-50
        px-2 pb-2
        xl:px-6 xl:pb-4
        h-[calc(100vh_-_4rem)]
        lg:h-[calc(100vh_-_5rem)]
      "  
    >
      {
        children
      }
    </div>
  )
}