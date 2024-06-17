import { ReactNode } from "react"

type HeaderProps = {
  image: {
    src: string,
    alt: string
  },
  children: ReactNode
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <img {...props.image} />
      {props.children}
    </header>
  )
}

export default Header
