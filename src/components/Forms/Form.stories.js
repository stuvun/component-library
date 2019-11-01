import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
    .add('Email', () => <Form
        label='Email'
        type='text'
        display='email'
    />)
    .add('Email Medium', () => <Form
        label='Email'
        type='text'
        display='email'
        medium
    />)
    .add('Email Large', () => <Form
        label='Email'
        type='text'
        display='email'
        large
    />)
    .add('Select', () => <Form
        label='Select'
        type='select'
        display='selector'
        svg='downArrow'
    />)
    .add('Select Medium', () => <Form
        label='Select'
        type='select'
        display='selector'
        svg='downArrow'
        medium
    />)
    .add('Select Large', () => <Form
        label='Select'
        type='select'
        display='selector'
        large
        downArrow
    />)
    .add('Counter', () => <Form
        label='Counter'
        type='counter'
        display='counts'
        value={0}
        min={0}
        max={10}
        steps={2}
        large
    />)