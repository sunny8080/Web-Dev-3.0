import './Products.css'
import Product from './Product'

const Products = (props) => {
    const items = props.products;


    return (
        <div className="products">
            {/* <Product
                title={props.products[0].title}
                amount={props.products[0].amount}
                date={props.products[0].date}
            ></Product>

            <Product
                title={props.products[1].title}
                amount={props.products[1].amount}
                date={props.products[1].date}
            ></Product>

            <Product
                title={props.products[2].title}
                amount={props.products[2].amount}
                date={props.products[2].date}
            ></Product>

            <Product
                title={props.products[3].title}
                amount={props.products[3].amount}
                date={props.products[3].date}
            ></Product> */}

            {/* items.map((item) => (
            <Product
                title={item.title}
                amount={items.amount}
                date={items.date}
            ></Product>
            )) */}


            {/* render updated items */}
            {
                items.map((item) => {
                    return <Product
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    ></Product>
                })
            }



        </div>
    )
}

export default Products;

