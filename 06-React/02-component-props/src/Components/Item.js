import "./Item.css";

function Item(props){
    const itemName = props.name;
    return(
        <div>
            <p className="item-name">{itemName}</p>
            {props.children}
        </div>
    );
}

export default Item;