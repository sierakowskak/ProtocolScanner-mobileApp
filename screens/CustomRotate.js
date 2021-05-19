import CustomCrop from "react-native-perspective-image-cropper";
import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import ImageRotate from 'react-native-image-rotate';

export default class CropView extends PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            initialImage: "",
            currentAngle: 0,

        }
        this.rotate = this.rotate.bind(this);
    }

    componentDidMount() {
        if (this.props.route.params) {
            let image = this.props.route.params;

            Image.getSize(image, (widthI, heightI) => {
                this.setState({
                    initialImage: image,
                });
            });
        }
    }


    updateImage() {
        console.log('width', this.state.initialImage.width)
        this.props.navigation.navigate('CustomCrop', this.state.initialImage);

    }


    rotate() {
        const nextAngle = this.state.currentAngle + 90
        ImageRotate.rotateImage(
            this.state.initialImage,
            90,
            (uri) => {
                this.setState({
                    initialImage: uri,
                    currentAngle: nextAngle,
                });
            },
            (error) => {
                console.error(error);
            }
        );
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.cropContainer}>

                    <Image style={{ width: '100%', height: '100%', alignSelf: 'center', }} resizeMode={'contain'} source={{ uri: this.state.initialImage }} />
                </View>

                <View style={styles.buttonsContainer}>

                    <TouchableOpacity onPress={this.rotate.bind(this)} style={styles.iconButton}>
                        <Icon
                            name="redo"
                            size={40}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptButton} onPress={this.updateImage.bind(this)}>
                        <Text style={styles.acceptText}>Accept</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: 'gray',
    },
    cropContainer: {
        height: '80%',
        backgroundColor: 'gray',
        flexDirection: 'column',
        marginTop: '5%',
        marginBottom: '5%',
    },

    buttonsContainer: {
        height: '20%',
        backgroundColor: 'black',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconButton: {
        top: '5%',
        left: '30%'
    },
    acceptButton: {
        width: '50%',
        height: '50%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        left: '10%',
        marginBottom: 30,
        borderRadius: 5
    },
    acceptText: {
        fontSize: 25,
        color: '#ffffff'
    }
})