import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiMenu, FiSend, FiTrash, FiX } from "react-icons/fi";
import { Button } from "./Button";
import { useState } from "react";

const inLineIcon = "inline mb-1 sm:mr-2"
const colIcon = "inline mr2-1 mb-1"
const smOnlyText = "hidden sm:inline"

export function BottomBar() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div 
      className="
        flex items-center w-full 
        gap-2 relative 
        md:hidden
      "
    >
        <Button active>
          <FiEdit3 className={inLineIcon} />
          <span className={smOnlyText}>
            Escrever
          </span>
        </Button>
      
        <Button>
          <FiInbox className={inLineIcon} />
          <span className={smOnlyText}>
            Caixa...
          </span>
        </Button>
      
        <Button>
          <FiSend className={inLineIcon} />
          <span className={smOnlyText}>
            Enviados
          </span>
        </Button>
        
        <Button>
          <FiFileText className={inLineIcon} />
          <span className={smOnlyText}>
            Rascunhos
          </span>
        </Button>
            
        <Button onClick={() => setMenuOpen(state => !state)}>
          {
            isMenuOpen ? (
              <>
                <FiX className={inLineIcon} />
                <span className={smOnlyText}>Fechar</span>
              </>
            ) : (
              <>
                <FiMenu className={inLineIcon} />
                <span className={smOnlyText}>Mais</span>
              </>

            )
          }

        </Button>

        <div 
          className={`
            flex flex-col
            gap-2 w-40
            right-0 top-12
            ${isMenuOpen ? 'absolute' : 'hidden'}
          `}
        >
          <Button>
            <FiArchive className={colIcon} />
            Arquivados
          </Button>
          
          <Button>
            <FiAlertOctagon className={colIcon} />
            Spam
          </Button>
          
          <Button>
            <FiTrash className={colIcon} />
            Lixeira
          </Button>

        </div>
    </div>
  )
}