import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const button = {
    disabled: false,
    label: 'Test button',
    classes: 'btn btn-default'
}

export const actions = {
    onButtonClick: action('onButtonClick')
}

storiesOf('Button', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <Button label={button.label} classes={button.classes} />)