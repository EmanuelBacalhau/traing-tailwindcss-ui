import { Dispatch, SetStateAction } from 'react'
import emails from '../../emails.json'
import { Email } from '../../App'
import { EmailListItem } from './EmailListItem'



type Props = {
  setOpenEmail: Dispatch<SetStateAction<Email>>
}

export function EmailList({ setOpenEmail }: Props) {
  return (
    <div 
      className="
        relative
        overflow-y-scroll
      "
    >
      {
        emails.map(email => (
          <EmailListItem key={email.id} data={email}  onClick={() => setOpenEmail(email)} />
        ))
      }
    </div>
  )
}