
import React, { PureComponent } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';


export default class CroppedImageScreen extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
        }
    }

    goToNameForm = () => {
        this.props.navigation.navigate('NamesForm');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    {this.state.image !== '' &&
                        <Image
                            style={styles.image}
                            source={require('./cut_protocol.jpg')}
                        />
                    }
                </View>
                <TouchableOpacity onPress={() => this.goToNameForm()} style={styles.acceptButton}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: '#9e9b98',
        flexDirection: 'column',
    },
    imageContainer: {
        height: '85%',
        width:'90%',
        marginLeft:'5%',
        marginTop:'5%',
        backgroundColor: 'red',
        
    },
    image: {
        height: '100%',
        width: '100%'
    },
    acceptButton: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom:0,
        borderRadius: 5
    },
    acceptText: {
        fontSize: 25,
        color: '#ffffff'
    }
})