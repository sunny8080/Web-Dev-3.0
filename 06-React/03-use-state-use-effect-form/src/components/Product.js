import { useState } from 'react';
import './Product.css'
import ProductDate from './ProductDate'

const Product = (props) => {
    // use useState hook
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle('Tumko Nhi Denge');
        // console.log("add to cart button clicked");
    }

    return (
        <div className='product'>
            <ProductDate date={props.date}></ProductDate>
            <div className='product-desc'>
                <h2>{title}</h2>
                <h3>₹{props.amount}</h3>
            </div>
            <button className='addBtn' onClick={clickHandler}>Add to Cart</button>

        </div>
    );
}

export default Product;