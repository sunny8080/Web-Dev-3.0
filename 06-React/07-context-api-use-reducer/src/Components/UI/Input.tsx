import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <p className="form-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  )
}

export default Input
