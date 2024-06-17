import { useState } from "react"
import { useAppSelector } from "../store/hooks";
import CartModal from "./CartModal";

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartQuantity = useAppSelector(
    (state) => state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );

  const handleOpenCart = () => {
    setCartIsVisible(true)
  }
  const handleCloseCart = () => {
    setCartIsVisible(false)
  }

  return (
    <div>
      {cartIsVisible && <CartModal onClose={handleCloseCart} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant Model" />
          <h1>Elegant Redux</h1>
        </div>

        <div>
          <button onClick={handleOpenCart}>Cart ({cartQuantity})</button>
        </div>
      </header>
    </div>
  )
}

export default Header
