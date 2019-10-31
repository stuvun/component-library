import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
    .add('Email', () => <Form
        label='Email'
        type='text'
        value='Submit'
    />)
    .add('Email Medium', () => <Form
        label='Email'
        type='text'
        value='Submit'
        medium
    />)
    .add('Email Large', () => <Form
        label='Email'
        type='text'
        value='Submit'
        large
    />)