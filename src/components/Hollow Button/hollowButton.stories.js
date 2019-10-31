import React from 'react';
import { storiesOf } from '@storybook/react';

import HollowButton from './hollowButton';

storiesOf('Hollow Button', module)
    // Primary Button
    .add('Primary', () => <HollowButton
        label="Do something"
        type2="primaryHollow"
    />)
    .add('Large Primary', () => <HollowButton
        label="Do something"
        type2="primaryHollow"
        largeHollow
    />)
    // Danger Button
    .add('Danger', () => <HollowButton
        label="Do something"
        type2="dangerHollow"
    />)
    .add('Large Danger', () => <HollowButton
        label="Do something"
        type2="dangerHollow"
        largeHollow
    />)
    // Success Button
    .add('Success', () => <HollowButton
        label="Do something"
        type2="successHollow"
    />)
    .add('Large Success', () => <HollowButton
        label="Do something"
        type2="successHollow"
        largeHollow
    />)
    // Warning Button
    .add('Warning', () => <HollowButton
        label="Do something"
        type2="warningHollow"
    />)
    .add('Large Warning', () => <HollowButton
        label="Do something"
        type2="warningHollow"
        largeHollow
    />)
    // Default Button
    .add('Default', () => <HollowButton
        label="Do something"
        type2="defaultHollow"
    />)
    .add('Large Default', () => <HollowButton
        label="Do something"
        type2="defaultHollow"
        largeHollow
    />)