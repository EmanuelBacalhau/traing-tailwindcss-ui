import { useState } from "react"
import { Header } from "./components/Header"

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Header />
      <div className="
        h-screen 
        flex items-center justify-center 
        text-zinc-950 
        dark:bg-zinc-800 dark:text-zinc-50">
        <button 
          onClick={() => setCount(value => value++)} 
          className="
            p-4 rounded-md 
            text-black-200 
            border border-transparent hover:border-cyan-500 
            transition-colors
          "
        >
          Count {count}
        </button>
      </div>
    </>
  )
}

export default App
