import { Button } from "./Button"
import { WriteButton } from "./WriteButton"
import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash } from 'react-icons/fi'

const inLineIcon = "inline mr-1 mb-1"

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
        <FiEdit3 className={inLineIcon} />
        Escrever
      </WriteButton>
      
      <Button active>
        <FiInbox className={inLineIcon} />
        Caixa de entrada
      </Button>
      
      <Button>
        <FiSend className={inLineIcon} />
        Enviados
      </Button>
      
      <Button>
        <FiFileText className={inLineIcon} />
        Rascunhos
      </Button>
      
      <Button>
        <FiArchive className={inLineIcon} />
        Arquivados
      </Button>
      
      <Button>
        <FiAlertOctagon className={inLineIcon} />
        Spam
      </Button>
      
      <Button>
        <FiTrash className={inLineIcon} />
        Lixeira
      </Button>
    </aside>
  )
}