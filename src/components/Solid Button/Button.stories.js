import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    // Primary Button
    .add('Primary', () => <Button
        label="Do something"
        type="primary"
    />)
    .add('Large Primary', () => <Button
        label="Do something"
        type="primary"
        large
    />)
    // Danger Button
    .add('Danger', () => <Button
        label="Do something"
        type="danger"
    />)
    .add('Large Danger', () => <Button
        label="Do something"
        type="danger"
        large
    />)
    // Success Button
    .add('Success', () => <Button
        label="Do something"
        type="success"
    />)
    .add('Large Success', () => <Button
        label="Do something"
        type="success"
        large
    />)
    // Warning Button
    .add('Warning', () => <Button
        label="Do something"
        type="warning"
    />)
    .add('Large Warning', () => <Button
        label="Do something"
        type="warning"
        large
    />)
    // Default Button
    .add('Default', () => <Button
        label="Do something"
        type="default"
    />)
    .add('Large Default', () => <Button
        label="Do something"
        type="default"
        large
    />)
    