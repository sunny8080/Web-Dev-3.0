import { useAppDispatch, useAppSelector } from "../store/hooks"
import { type CartItem, addToCart, removeFromCart } from "../store/slices/cartSlice";

const CartItems = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const totalPrice = cartItems.reduce((val, item) => val + item.quantity * item.price, 0.0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  const dispatch = useAppDispatch();


  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <div id="cart">
      {!cartItems || cartItems.length === 0 && <p>No items in cart !</p>}

      {cartItems && cartItems.length > 0 && (
        <div>
          <ul id="cart-items">
            {
              cartItems.map((item) => {
                const formattedPrice = item.price.toFixed(2);

                return (
                  <li key={item.id}>
                    <div>
                      <span>{item.title}</span>
                      <span> - </span>
                      <span>$ {formattedPrice}</span>
                    </div>

                    <div className="cart-item-actions">
                      <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>

          <p id="cart-total-price">
            Cart Total : <strong>$ {formattedTotalPrice}</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default CartItems
