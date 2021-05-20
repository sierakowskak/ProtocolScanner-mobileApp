import CustomCrop from "react-native-perspective-image-cropper";
import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/EvilIcons';

import ImageRotate from 'react-native-image-rotate';

export default class CropView extends PureComponent {


  constructor(props) {
    super(props);

    this.state = {
      imageWidth: 0,
      imageHeight: 0,
      initialImage: "",
      currentAngle: 0,
      width: 250,
      height: 500,
      rectangleCoordinates: {
        topLeft: { x: 0, y: 0 },
        topRight: { x: 0, y: 0 },
        bottomRight: { x: 0, y: 0 },
        bottomLeft: { x: 0, y: 0 }
      },
      pressStatus: false,
      spinWheel: false,
    }
  }

  componentDidMount() {
    if (this.props.route.params) {
      let image = this.props.route.params;
      console.log('image: ', image)
      const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;

      Image.getSize(image, (width, height) => {
        console.log('222', image, width, height)

        RNFS.readFile(image, 'base64')
          .then(res => {
            // console.log(res);
            this.setState({

              imageWidth: width,
              imageHeight: height,

              initialImage: image,
              rectangleCoordinates: {
                topLeft: { x: width * 0.2, y: height * 0.2 },
                topRight: { x: width * 0.8, y: height * 0.2 },
                bottomLeft: { x: width * 0.2, y: height * 0.7 },
                bottomRight: { x: width * 0.8, y: height * 0.7 }
              }
            });
          });

      });
    }
  }


  updateImage(image, newCoordinates) {
    this.setState({
      initialImage: image,
      rectangleCoordinates: newCoordinates
    });
  }



  crop() {
    // this.customCrop.crop();
    this.props.navigation.navigate('CroppedImageScreen');
    console.log('crop function')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cropContainer}>
          {this.state.imageHeight !== 0 && this.state.imageWidth !== 0 && this.state.initialImage &&
            <CustomCrop
              updateImage={this.updateImage.bind(this)}
              rectangleCoordinates={this.state.rectangleCoordinates}
              initialImage={this.state.initialImage}
              height={this.state.imageHeight}
              width={this.state.imageWidth}
              ref={ref => (this.customCrop = ref)}
              overlayColor="rgba(66, 135, 245, 1)"
              overlayStrokeColor="rgba(68, 135, 245, 1)"
              handlerColor="rgba(68, 135, 245, 1)"
              enablePanStrict={false}
            />
          }

        </View>

        <TouchableOpacity style={styles.acceptButton} onPress={this.crop.bind(this)}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>

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
    height: '85%',
    flexDirection: 'column',
    marginTop: '40%',
    marginBottom: '5%',
    backgroundColor: 'gray',
    flex: 6,
  },
  acceptButton: {
    width: '100%',
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5
  },
  acceptText: {
    fontSize: 25,
    color: '#ffffff'
  }
})