import { useState } from 'react';
import './ProductForm.css'


const ProductForm = (props) => {

    const [newTitle, setTitle] = useState('');
    const [newAmount, setAmount] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }


    function submitHandler(event) {
        event.preventDefault();
        const sDate = newDate.split('-');
        const productData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(sDate[0], sDate[1], sDate[2]),
        }

        // calling parent component, so that productData will be send to parent component 
        props.onSaveProduct(productData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form className='product-form' onSubmit={submitHandler}>
            <div className='product-form_controls'>

                <div>
                    <label htmlFor="">Title</label>
                    <input value={newTitle} onChange={titleChangeHandler} type="text" required />
                </div>

                <div>
                    <label htmlFor="">Amount</label>
                    <input value={newAmount} onChange={amountChangeHandler} type="number" required />
                </div>

                <div>
                    <label htmlFor="">Date</label>
                    <input value={newDate} onChange={dateChangeHandler} type="date" min='2023-01-01' max='2023-12-12' required />
                </div>

                <div className='btn-wrapper'>
                    <button className='btn' type='submit'>Add Product</button>
                </div>

            </div>


        </form>
    );
}

export default ProductForm;