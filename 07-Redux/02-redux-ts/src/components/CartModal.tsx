import { createPortal } from "react-dom";
import CartItems from "./CartItems";

type CartModalProps = {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  return (
    createPortal(
      <div>
        <div className="cart-backdrop" />
        <dialog id="cart-modal" open>
          <h2>Your Cart</h2>

          <CartItems />

          <p id="cart-actions">
            <button onClick={onClose}>Close</button>
          </p>
        </dialog>
      </div>,
      document.getElementById('modal')!
    )
  )
}

export default CartModal
