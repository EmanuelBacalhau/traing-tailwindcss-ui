import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function EmailData({ children }: Props) {
  
  return (
  <h2 className="text-zinc-600 dark:text-zinc-400">{children}</h2>
  )
}