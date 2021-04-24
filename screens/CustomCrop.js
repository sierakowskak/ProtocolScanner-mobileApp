import CustomCrop from "react-native-perspective-image-cropper";
import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class CropView extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      imageWidth: 0,
      imageHeight: 0,
      initialImage: "",
      rectangleCoordinates: {
        topLeft: { x: 0, y: 0 },
        topRight: { x: 0, y: 0 },
        bottomRight: { x: 0, y: 0 },
        bottomLeft: { x: 0, y: 0 }
      },
    }
  }

  componentDidMount() {
    if (this.props.route.params) {
      let image = this.props.route.params;
      Image.getSize(image, (width, height) => {
        this.setState({
          imageWidth: width,
          imageHeight: height * 0.80,
          initialImage: image,
          rectangleCoordinates: {
            topLeft: { x: width * 0.2, y: height * 0.2 },
            topRight: { x: width * 0.8, y: height * 0.2 },
            bottomLeft: { x: width * 0.2, y: height * 0.8 },
            bottomRight: { x: width * 0.8, y: height * 0.8 }
          }
        });
      });
    }
  }


  updateImage(image, newCoordinates) {
    // const { navigate } = this.props.navigation;
    console.log('update image function')
    // console.log('first image: ', this.state.initialImage)
    this.setState({
      // image,
      initialImage: image,
      rectangleCoordinates: newCoordinates
    });
    this.props.navigation.navigate('CroppedImageScreen', image);

  }

  crop() {
    this.customCrop.crop();
    console.log('crop function')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cropContainer}>
          <View style={styles.custom}>
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

        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.crop.bind(this)} style={styles.cropButton}>
            <Icon
              name="check"
              size={40}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cropButton}>
            <Icon
              name="redo"
              size={40}
              color="white"
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',

  },
  cropContainer: {
    height: '90%',
    backgroundColor: 'gray',
    flexDirection: 'column',

  },
  custom: {
    top: '5%'
  },
  buttonsContainer: {
    height: '10%',
    backgroundColor: 'black',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cropButton: {
    top: '2%'
  }
})