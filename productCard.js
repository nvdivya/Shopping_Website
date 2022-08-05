import React, { useContext } from 'react';
import './productCard.css';
import Rating from './Rating';
import CartContext from '../context/cart/CartContext';
// import FormatCurrency from "format-currency";
const ProductCard = ({product}) => {
    const { addToCart } = useContext(CartContext)
    // let opts={format:'%s%v',symbol:'$'}
    return (
        <div className='productCard_wrapper'>
            <div>
                
                <img  className='productCard_img' src={product.image} alt="" />
                <h4>{product.title}</h4>
                <div className='productCard_price'> 
                    {/* <h5> {FormatCurrency(`${product.price}`,opts)} </h5>  */}
                    ${product.price}
                </div>
                <div className="productCard_Rating">
                    <Rating value={product.rate} text={`${product.count} count`}/>
                </div>
                <button className='productCard_button' onClick={ ()=> addToCart(product)}>Add to basket</button>
            </div>
            
        </div>
    );
};

export default ProductCard;