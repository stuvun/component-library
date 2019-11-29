import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail';

storiesOf ('Thumbnail', module)
    .add('Outline Block', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail'
        />)
    .add('Filled Block', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail filled'
        />)
    .add('Outline Row', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail row'
        />)
    .add('Filled Row', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail filled row'
        />)
    .add('Beats Thumb', () => <Thumbnail
        label='Beats Solo 2 On Ear Headphones - Black'
        type='thumbnail beats'
        />)
    .add('Inline', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail inline'
        />)