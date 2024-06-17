import { type ComponentPropsWithoutRef } from "react"

type AnchorProps = {
  as: 'a'
} & ComponentPropsWithoutRef<'a'>;

type ButtonProps = {
  as: 'button'
} & ComponentPropsWithoutRef<'button'>;


const Button = (props: AnchorProps | ButtonProps) => {
  // const { as, ...otherProps } = props // don't do, as compiler don't know type of otherProps

  return (
    props.as === 'a' ?
      <a className="button" {...props}></a>
      :
      <button className="button" {...props}></button>
  )
}

export default Button
