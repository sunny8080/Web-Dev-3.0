import { type ComponentPropsWithoutRef, type ReactNode, type ElementType } from "react"

// Component that accepts a Component (or element) as props, this element is function that returns some jsx code
// here icon is a 

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: ElementType,
  children: ReactNode,
  onClick: () => void
}

const IconButton = ({ icon: Icon, children, ...otherProps }: IconButtonProps) => {
  return (
    <button {...otherProps} >
      <span>
        <Icon />
      </span>

      <span>
        {children}
      </span>
    </button>
  )
}

export default IconButton
