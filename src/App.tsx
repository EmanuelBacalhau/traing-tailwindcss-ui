import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { SideBar } from "./components/Sidebar"

function App() {

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
          <h1>To aqui</h1>
        </div>
      </Container>
    </>
  )
}

export default App
