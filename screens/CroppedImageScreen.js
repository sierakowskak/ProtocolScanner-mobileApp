
import CustomCrop from "react-native-perspective-image-cropper";
import React, { Component, PureComponent } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default class CroppedImageScreen extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        // let image = this.props.route.params;
        let image = 'data:image/png;base64,' + this.props.route.params;
        // console.log(image);
        this.setState({
            // image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            image: image 
        })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.state.image !== '' &&
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.image }}
                    />
                }
            </View>
        );
    }
}



const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: 'red'
    },
    image:{
        height:'100%',
        width:'100%'
    }
})