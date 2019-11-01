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
    />)
    .add('Select Medium', () => <Form
        label='Select'
        type='select'
        display='selector'
        medium
    />)
    .add('Select Large', () => <Form
        label='Select'
        type='select'
        display='selector'
        large
    />)
    .add('Select (Filled)', () => <Form
        label='Select'
        type='select'
        display='selector'
        filled
    />)
    .add('Select Medium (Filled)', () => <Form
        label='Select'
        type='select'
        display='selector'
        medium
        filled
    />)
    .add('Select Large (Filled)', () => <Form
        label='Select'
        type='select'
        display='selector'
        large
        filled
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
    .add('Redeem', () => <Form
        label='Voucher code'
        type='redeem'
        display='redeemer'
    />)
    .add('Checkbox', () => <Form
        type='check'
        display='checkbox'
        check='black'
    />)
    .add('Checkbox (Blue)', () => <Form
        type='check'
        display='checkbox'
        blue
        check='blue'
    />)