import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

// Polymorphic component -
// using polymorphic component concept we can render component as multiple element, for ex comp can be html div or button or span

// The as prop is passed to a component to determine what eventual container element to render.
// Note - "as" prop is used in Chakra UI
// Note - "component" prop is used in Material UI
// "as" - this is the exposed prop to control the render element of the Polymorphic component
// we have to use "ComponentPropsWithoutRef" so that when we create this component, we don't pass wrong attributes like wrong html element prop(as) for ex - write divv instead of div
type PolymorphicContainerProps<T extends ElementType> = {
  as?: T,
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

const PolymorphicContainer = <U extends ElementType>(
  { as, children, ...props }: PolymorphicContainerProps<U>
) => {

  const Component = as || 'div';

  return (
    <Component {...props}>
      {children}
    </Component>
  )
}

export default PolymorphicContainer
