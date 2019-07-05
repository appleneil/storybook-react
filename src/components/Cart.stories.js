import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Cart from './Cart';

storiesOf('Cart', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <Cart />)