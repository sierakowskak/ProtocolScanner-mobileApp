import * as React from 'react';
// import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class SettingsButton extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <TouchableOpacity style={{ marginRight: 10 }}>
                {/* <TouchableOpacity onPress={() => this.navigateToNames()} style={{ marginRight: 10 }}> */}
                <Icon
                    name="gear"
                    size={25}
                    color="white"
                />
            </TouchableOpacity>
        )

    }
}