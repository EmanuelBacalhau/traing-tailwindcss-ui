import { ButtonHTMLAttributes } from "react";
import { FiX } from "react-icons/fi";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function EmailCloseButton({...props}: Props) {
  return (
    <button 
      className="
        absolute
        top-2
        right-2
        px-2 py-1 rounded
        bg-red-300 hover:bg-red-400
        dark:bg-red-500 dark:hover:bg-red-600
        transition-colors
      " 
      {...props}
    >
      <FiX className='inline sm:mr-1 mb-1' />
      <span className="hidden sm:inline">Fechar</span>
    </button>
  )

}