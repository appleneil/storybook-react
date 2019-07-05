import React from 'react';
import CartProduct from './CartProduct'
import './cart.scss'
import Button from "./Button";

export default function Cart() {
    return (
        <div className="cart">
            <CartProduct label="Déménagement classique" distance="757 km" size="50 m3" price="3088,55 €" />
            <div className="cart-attention">
                Renseignez attentivement vos options, puis cliquez sur « <strong>Poursuivre</strong> »
            </div>
            <Button label="Poursuivre" classes="btn btn-full btn-orange"></Button>
        </div>
    )
}