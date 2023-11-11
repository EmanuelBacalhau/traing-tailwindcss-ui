import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { SearchForm } from "./SearchForm";

export function Header() {
  return (
    <header 
      className="
        px-4 h-16 
        flex justify-between items-center 
        gap-6
        bg-zinc-100 dark:bg-zinc-800
        md:gap-16
        lg:h-20
        xl:px-6 xl:gap-32
      " 
    >
      <Logo />
      <SearchForm />
      <Avatar />
    </header>
  )
}