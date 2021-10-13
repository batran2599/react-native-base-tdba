import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    switchBase__wrap: {
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    switchBase__childSwitch: {
        width: '50%',
        height: '100%',
    },
    switchBase__runner: {
        position: 'absolute',
        backgroundColor: '#ffffff',
    },
});
