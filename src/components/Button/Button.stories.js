import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Primary"
        type="primary"
    />)
    .add('Danger', () => <Button
        label="Danger"
        type="danger"
    />)
    .add('Success', () => <Button
        label="Success"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Warning"
        type="warning"
    />)
    .add('Large Primary', () => <Button
        label="Large"
        type="primary"
        large
    />)