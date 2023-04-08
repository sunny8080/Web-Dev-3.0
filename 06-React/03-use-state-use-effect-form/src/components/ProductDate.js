import './ProductDate.css'
import React from 'react';

const ProductDate = ({ date }) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();;

    return (
        <div className='product-date'>
            <div className='product-name-day'>{day}</div>
            <div className='product-name-month'>{month}</div>
            <div className='product-name-year'>{year}</div>

        </div>
    )
}

export default ProductDate;