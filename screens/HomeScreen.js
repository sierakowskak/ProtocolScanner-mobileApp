
import React, { PureComponent, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import SettingsButton from '../components/SettingsButton';
import ImagePicker from 'react-native-image-crop-picker';
// import RNFetchBlob from 'rn-fetch-blob'

export default class HomeScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    navigateToCustomCrop = data => {
        this.props.navigation.navigate('CustomCrop', data);
    }

    takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false
        }).then(image => {
            this.navigateToCustomCrop(image.path);
        })
            .catch(err => {
                console.log(' Error fetching image from Camera roll ', err);
            });
    }

    choosePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
            this.navigateToCustomCrop(image.path);
        })
            .catch(err => {
                console.log(' Error fetching images from gallery ', err);
            });
    }

    navigateToNamesForm = () => {
        this.props.navigation.navigate('NamesForm');
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Hello to Basket Protocol Scaner</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.takePhotoFromCamera()} style={styles.button}><Text style={styles.textIn}>Camera</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.choosePhotoFromGallery()} style={styles.button}><Text style={styles.textIn}>Pick photo</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateToNamesForm()} style={styles.button}><Text style={styles.textIn}>Names</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#9e9b98',
        height: '100%'
    },
    headerContainer: {
        marginTop: 40,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 40,
        fontFamily: 'sans-serif',
        lineHeight: 45,
        color: '#ffffff',
        textAlign: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        backgroundColor: '#9e9b98',
        height: '40%',
        width: '100%'
    },
    textIn: {
        fontSize: 30,
        color: '#ffffff'
    },
    button: {
        backgroundColor: '#f59b42',
        width: '95%',
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
});