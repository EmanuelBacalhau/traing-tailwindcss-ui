import { FiSearch } from 'react-icons/fi'

export function SearchForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()} 
      className="
        min-w-0
        flex-grow flex
      ">
      <input 
        type="text" 
        placeholder="Pesquisar..."
        className="
          min-w-0 w-full p-2 rounded-l-lg 
        bg-zinc-200 dark:bg-zinc-700
          border-2 border-transparent
          text-zinc-900 dark:text-zinc-50 
          focus:outline-none focus:border-emerald-400 transition-colors
        "  
        
      />
      <button
        className="
            min-w-0
            py-2 px-4
            rounded-r-lg
            bg-zinc-200 dark:bg-zinc-700
            text-zinc-900 dark:text-zinc-50 
            focus:text-emerald-400
            border border-transparent
            focus:outline-none focus:border-emerald-400 transition-colors
            hover:border-emerald-400 hover:text-emerald-400

          "
        >
        <FiSearch />
      </button>
    </form>
  )
}