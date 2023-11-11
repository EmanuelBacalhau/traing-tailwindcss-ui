import { ButtonHTMLAttributes } from "react"
import { Email } from "../../App"
import { Avatar } from "./Avatar"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: Email
}

export function EmailListItem({ data, ...props }: Props) {
  return (
    <button
      className="
        flex items-center gap-4 p-2
        [&+button]:mt-2
        hover:cursor-pointer hover:bg-zinc-200
        dark:hover:bg-zinc-900
        rounded-lg transition-colors
      "
      {...props}
    >

      <Avatar letter={data.from[0].toUpperCase()} />
      
      <div className="grow shrink basis-40 text-start">
        <strong>{data.subject}</strong>
        <p>{data.body.length > 64 ? data.body.slice(0, 22) + '...' : data.body}</p>
      </div>
    </button>
  )
}