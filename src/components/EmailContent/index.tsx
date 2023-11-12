import { Dispatch, SetStateAction } from "react"
import { Email } from "../../App"
import { EmailCloseButton } from "./EmailCloseButton"
import { EmailData } from "./EmailData"
import { EmailTitle } from "./EmailTitle"

type Props = {
  email: Email
  setOpenEmail: Dispatch<SetStateAction<Email>>
}


export function EmailContent({ email, setOpenEmail }: Props) {
  const sendDate = new Date(email.createdAt)
  const openEmailDate = 
    `${sendDate.toLocaleDateString()} - ${sendDate.toLocaleTimeString()}`

  return (
    <div 
      className="
        p-2 md:p-4 absolute
        h-full w-full
        lg:relative 
        bg-zinc-50 dark:bg-zinc-700
        text-zinc-900 dark:text-zinc-50
        grow-[2] basis-40
      "
    >
      <EmailCloseButton onClick={() => setOpenEmail({} as Email)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>De: {`<${email.from}>`}</EmailData>
      <EmailData>Para: {`<john.doe@gmail.com>`}</EmailData>
      <EmailData>Em: {openEmailDate}</EmailData>
      <hr className="my-4" />
      {email.body}
    </div>
  )
}