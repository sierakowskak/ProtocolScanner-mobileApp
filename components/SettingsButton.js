import * as React from 'react';
// import { Button } from 'react-native-elements';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const SettingsButton = () => (
    <TouchableOpacity style={{marginRight: 10}}>
        <Icon
            name="gear"
            size={25}
            color="white"
        />
    </TouchableOpacity>
);

export default SettingsButton;