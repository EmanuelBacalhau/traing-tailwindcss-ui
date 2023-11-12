import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function EmailTitle({ children }: Props) {
  return (
    <h2 className="text-2xl font-bold mb-2">{children}</h2>
  )
}