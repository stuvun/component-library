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
    .add('Hollow Primary', () => <Button
        label="Do something"
        type="primary-hollow"
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
    .add('Hollow Danger', () => <Button
        label="Do something"
        type="danger-hollow"
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
    .add('Hollow Success', () => <Button
        label="Do something"
        type="success-hollow"
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
    .add('Large Default', () => <Button
        label="Do something"
        type="default"
        large
    />)
    .add('Hollow Default', () => <Button
        label="Do something"
        type="default-hollow"
    />)
    