import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do something"
        type="primary"
    />)
    .add('Danger', () => <Button
        label="Do something"
        type="danger"
    />)
    .add('Success', () => <Button
        label="Do something"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Do something"
        type="warning"
    />)
    .add('Default', () => <Button
        label="Do something"
        type="default"
    />)
    .add('Large Primary', () => <Button
        label="Do something"
        type="primary"
        large
    />)
    .add('Large Danger', () => <Button
        label="Do something"
        type="danger"
        large
    />)
    .add('Large Success', () => <Button
        label="Do something"
        type="success"
        large
    />)
    .add('Large Warning', () => <Button
        label="Do something"
        type="warning"
        large
    />)
    .add('Large Default', () => <Button
        label="Do something"
        type="default"
        large
    />)