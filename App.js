import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import CameraScreen from './screens/CameraScreen';
import HomeScreen from './screens/HomeScreen';
// import PhotoPickerScreen from './screens/PhotoPickerScreen';
import SettingsButton from './components/SettingsButton';

const Stack = createStackNavigator();

const App = () => {



  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: '', 
              headerStyle: { backgroundColor: '#555555' }, 
              headerTitleStyle: { fontSize: 10 } ,
            
              headerRight: () => (
                <SettingsButton/>)
            }}
              
            
            />
          {/* <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="PhotoPicker" component={PhotoPickerScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
