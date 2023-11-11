import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  active: boolean
}

export function Button({children, active, ...props }: Props) {
  const bgColor = active ? 
    "bg-emerald-300 dark:bg-emerald-600" 
    : "bg-gray-200 dark:bg-gray-900"

  return (
    <button 
      {...props}
      className={`
        flex-1 p-2 mb-0.5 
        rounded-lg shadow 
        text-gray-900 dark:text-gray-50
        ${bgColor}
      `}
    >
      {
        children
      }
    </button>
  )
}