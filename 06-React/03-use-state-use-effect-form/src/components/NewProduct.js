import './NewProduct.css'
import ProductForm from './ProductForm'

const NewProduct = (props) => {

    return (
        <div className='new-product'>
            {/* resending parent function (props.addProduct) to child component (ProductForm)  */}
            <ProductForm onSaveProduct={props.addProduct}/>
        </div>
    )
}

export default NewProduct



