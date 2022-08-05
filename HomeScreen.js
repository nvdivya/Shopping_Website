import React from 'react';
import products from '../data';
import './HomeScreen.css';
import ProductCard from '../components/productCard';
const homescreen = () => {
    return (
        <div className='products_wrapper'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default homescreen;