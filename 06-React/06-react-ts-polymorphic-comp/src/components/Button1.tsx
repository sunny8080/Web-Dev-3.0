import { type ComponentPropsWithoutRef } from "react"

type AnchorProps = {
  el: 'a'
} & ComponentPropsWithoutRef<'a'>;

type ButtonProps = {
  el: 'button'
} & ComponentPropsWithoutRef<'button'>;


const Button1 = (props: AnchorProps | ButtonProps) => {
  // const { el, ...otherProps } = props // don't do, as compiler don't know type of otherProps

  return (
    props.el === 'a' ?
      <a className="button" {...props}></a>
      :
      <button className="button" {...props}></button>
  )
}

export default Button1
