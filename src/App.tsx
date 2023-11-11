import { useState } from "react"

import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"
import { Container } from "./components/Container"
import { BottomBar } from "./components/BottomBar"
import { EmailList } from "./components/EmailList"

export type Email = {
  id: number
  from: string
  subject: string
  body: string
  createdAt: string
}

function App() {
  const [openEmail, setOpenEmail] = useState<Email>({} as Email)

  return (
    <>
      <Header />
      <Container>
        <div 
          className="
            flex flex-col md:flex-row
            gap-2 md:gap-4 h-full relative
          "
        >
          <SideBar />

          <EmailList setOpenEmail={setOpenEmail} />

          {
            JSON.stringify(openEmail)
          }

          <BottomBar />
        </div>
      </Container>
    </>
  )
}

export default App
