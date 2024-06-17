import { ComponentPropsWithoutRef, forwardRef } from "react"

type CustomInputProps = {
  label: string,
  id: string
} & ComponentPropsWithoutRef<'input'>

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((
  { label, id, ...inputProps },
  ref) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" ref={ref} id={id} {...inputProps} />
    </div>
  )
})

export default CustomInput
