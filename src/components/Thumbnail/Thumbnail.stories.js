import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail';

storiesOf ('Thumbnail', module)
    .add('Block', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail'
        stacked
        />)
    .add('Block', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail'
        beside
        />)
    .add('Block', () => <Thumbnail
        label='Apple Macbook Pro'
        type='thumbnail'
        />)