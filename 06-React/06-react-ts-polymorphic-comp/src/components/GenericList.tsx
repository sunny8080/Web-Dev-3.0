import { type ReactNode } from "react"

type GenericListProps<T> = {
  items: T[],
  renderItem: (item: T, ind: number) => ReactNode
  notFoundMessage: string
}

// Declare the component as a generic function component
const GenericList = <T,>({ items, notFoundMessage, renderItem }: GenericListProps<T>) => {
  return (
    <div>
      {
        items && items.length !== 0 ?
          (
            <ul>
              {
                items.map((item, ind) => renderItem(item, ind))
              }
            </ul>
          )
          :
          (
            <p>{notFoundMessage}</p>
          )
      }
    </div>
  )
}


export default GenericList

// export default function GenericList<T>(props: GenericListProps<T>) {
//   return (
//     <div>GenericList</div>
//   )
// }
