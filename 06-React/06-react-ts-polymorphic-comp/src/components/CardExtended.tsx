import { type ReactNode } from "react"

// Card component that has multiple slots
// Main slots - children
// 2nd slot - actions prop 

type CardExtendedProps = {
  title: string,
  children: ReactNode,
  actions: ReactNode
}

const CardExtended = ({ title, children, actions }: CardExtendedProps) => {
  return (
    <div>
      <p>{title}</p>
      {children}
      {actions}
    </div>
  )
}

export default CardExtended
