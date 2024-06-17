import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

export type FormHandle = {
  clear: () => void;
  scrollIntoView: () => void;
}

type CustomFormProps = {
  onSave: (formValues: unknown) => void;
} & ComponentPropsWithoutRef<'form'>

const CustomForm = forwardRef<FormHandle, CustomFormProps>((
  { onSave, children, ...formProps }: CustomFormProps,
  ref) => {

  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("clearing form");
        formRef.current?.reset();
      },
      scrollIntoView() {
        formRef.current?.scrollIntoView();
      },
    }
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...formProps} ref={formRef} >
      {children}
    </form>
  )
})

export default CustomForm
