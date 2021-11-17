import React, { useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartAction';

export default function CartScreen(props) {
    const productId=props.match.params.id;
    const qty=props.location.search?Number(props.location.search.split('=')[1]):1;
    const dispatch = useDispatch()
    useEffect(() => {
      if(productId){}
       dispatch(addToCart(productId,qty))
    }, [dispatch,productId,qty]);
    return (
        <div>
            <h1>cartScreen</h1>
            <p>
             ADD TO CART: productID:{productId} Qty:{qty}   
            </p>
        </div>
    )
}
