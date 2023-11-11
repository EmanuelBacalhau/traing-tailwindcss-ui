type Props = {
  letter: string
}

export function Avatar({letter}: Props) {
  return (
    <div 
      className="
        w-12
        h-12
        grid
        rounded-full
        place-content-center
        bg-rose-300 dark:bg-rose-600 
      "
    >
      <span className="">{letter}</span>
    </div>
  )
}