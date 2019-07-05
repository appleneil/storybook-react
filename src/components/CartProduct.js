import React from 'react';
import './cart-product.scss'

export default function CartProduct(props) {
    return (
        <div className="cart-product">
            <div className="cart-product-label">
                {props.label}
            </div>
            <div className="cart-product-details">
                <span className="distance">{props.distance}</span> - <span className="size">{props.size}</span>
            </div>
            <div className="cart-product-price">
                À partir de
                <div className="price">{props.price}</div>
            </div>
        </div>
    )
}