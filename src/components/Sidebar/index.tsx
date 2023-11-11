import { Button } from "./Button"
import { WriteButton } from "./WriteButton"
import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash } from 'react-icons/fi'

const inLineIcons = "inline mr-2 mb-1"

export function SideBar() {
  return (
    <aside 
      className="
        hidden
        lg:flex flex-col items-start 
        gap-2 grow-0 
        basis-48 shrink
        "
      >
      <WriteButton>
        <FiEdit3 className={inLineIcons} />
        Escrever
      </WriteButton>
      
      <Button active>
        <FiInbox className={inLineIcons} />
        Caixa de entrada
      </Button>
      
      <Button>
        <FiSend className={inLineIcons} />
        Enviados
      </Button>
      
      <Button>
        <FiFileText className={inLineIcons} />
        Rascunhos
      </Button>
      
      <Button>
        <FiArchive className={inLineIcons} />
        Arquivados
      </Button>
      
      <Button>
        <FiAlertOctagon className={inLineIcons} />
        Spam
      </Button>
      
      <Button>
        <FiTrash className={inLineIcons} />
        Lixeira
      </Button>
    </aside>
  )
}