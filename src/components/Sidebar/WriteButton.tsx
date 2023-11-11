import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function WriteButton({ children }: Props) {
  return (
    <button 
      className="
        bg-emerald-400 hover:bg-emerald-500
        dark:bg-emerald-500 dark:hover:bg-emerald-600
        w-full rounded-lg transition-colors
        py-2 gap-2 
      "
    >
      {children}
    </button>
  )
}