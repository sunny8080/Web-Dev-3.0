import { type ProductItem } from "../App"
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";

type ProductProps = {
  product: ProductItem
}

const Product = (props: ProductProps) => {
  const { id, image, price, title, description } = props.product;
  const dispatch = useAppDispatch();


  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>

        <p className="product-actions">
          <button onClick={handleAddToCart}>Ad to Cart</button>
        </p>
      </div>
    </div>
  )
}

export default Product
