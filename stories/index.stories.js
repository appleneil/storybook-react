import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button'

storiesOf('Button', module)
  .add('with text', () =>
    <Button
      onClick={action('clicked')}
      color="#5e6073"
    >
      Hello Button
    </Button>
  )
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('disabled', () =>
    <Button
      onClick={action('clicked')}
      disabled
      dark
    >
      Hello Button
    </Button>
  )
;
