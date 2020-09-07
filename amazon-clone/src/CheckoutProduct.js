import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct(props) {
    const [{},dispatch] = useStateValue()
    console.table(props)
    const RemoveFromBasket= ()=>{
       dispatch({
           type: 'REMOVE_FROM_BASKET',
           id: props.id
       })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} alt=""/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{props.title}</p>

            <p className="checkoutProduct__price">
                <small>₹</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product__rating">
                {Array(props.rating)
                    .fill()
                    .map((_) =>(
                        <span role="img" description="star">⭐</span>
                    ))}
                {Array(5-props.rating)
                    .fill()
                    .map((_) =>(
                        <span role="img" description="star" className="product__blackStars">★</span>
                    ))
                }
            </div>
            <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
