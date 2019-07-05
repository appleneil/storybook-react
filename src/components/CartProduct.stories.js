import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CartProduct from './CartProduct';

export const cartProduct = {
    label: 'Product test in cart',
    distance: '1000 km',
    size: '100 m3',
    price: '1000 €',
}

storiesOf('Cart Product', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <CartProduct label={cartProduct.label} distance={cartProduct.distance} size={cartProduct.size} price={cartProduct.price} />)