import { type ComponentPropsWithoutRef } from "react"

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: never;
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: string;
}

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return 'href' in props
}


const Button2 = (props: AnchorProps | ButtonProps) => {

  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>

  // return (
  //   isAnchorProps(props) ?
  //     <a className="button" {...props}></a>
  //     :
  //     <button className="button" {...props}></button>
  // )
}

export default Button2
