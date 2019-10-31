import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    // Primary Button
    .add('Primary', () => <Button
        label="Do something"
        type="primary"
    />)
    .add('Hollow Primary', () => <Button
        label="Do something"
        type="primary-hollow"
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
    .add('Hollow Danger', () => <Button
        label="Do something"
        type="danger-hollow"
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
    .add('Hollow Success', () => <Button
        label="Do something"
        type="success-hollow"
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
    .add('Hollow Warning', () => <Button
        label="Do something"
        type="warning-hollow"
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
    .add('Hollow Default', () => <Button
        label="Do something"
        type="default-hollow"
    />)
    .add('Large Default', () => <Button
        label="Do something"
        type="default"
        large
    />)

    