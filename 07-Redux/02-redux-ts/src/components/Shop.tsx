import { type PropsWithChildren } from "react"

type ShopProps = PropsWithChildren;

const Shop = ({ children }: ShopProps) => {
  return (
    <div id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      {children}
    </div>
  )
}

export default Shop
