import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product(props) {
    const [{},dispatch] = useStateValue()
    const addToBasket = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">
                    {props.brand && <h5>{props.brand}</h5>}
                    {props.title}
                    {props.brand_sub && <small>by {props.brand_sub}</small>}
                </p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_) =>(
                            <span role="img" description="star">⭐</span>
                        ))}
                    {    Array(5-props.rating)
                        .fill()
                        .map((_) =>(
                            <span role="img" description="star" className="product__blackStars">★</span>
                        ))
                    }
                </div>
            </div>
            <img src={props.image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
