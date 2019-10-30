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