import React from 'react';
import {storiesOf} from '@storybook/react';

import StarWars from './StarWars';

export const dataUrl = 'https://swapi.co/api/people/1/?format=json';
export const isLoading = true;
export const isEmpty = true;


storiesOf('Star Wars', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('with data', () => <StarWars dataUrl isLoading />)
    .add('loading', () => <StarWars isLoading />)
    .add('empty', () => <StarWars isEmpty />)