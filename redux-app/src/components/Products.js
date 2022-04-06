import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice'

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    //fetch product
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts(); 
    },
        [] //empty array , so load single time when render this component
    );

    const handleAdd = (prod) => {
        //store product in redux store
        // dispatch action , through send data, this action call reducer 
        dispatch(add(
            //pass payload here
            prod
        ));
    }

    return (
        <div className='productsWrapper'>
            {
                products.map(prod => (
                    <div className='card' key={prod.id}>
                        <img src={prod.image} alt="" />
                        <h4>{prod.title}</h4>
                        <h5>{prod.price}</h5>
                        <button
                            onClick={() => handleAdd(prod)}
                        >Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;