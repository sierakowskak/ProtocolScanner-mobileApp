import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import NamesForm from './components/NamesForm';
import SettingsButton from './components/SettingsButton';
import CroppedImageScreen from './screens/CroppedImageScreen';
import CustomCrop from './screens/CustomCrop';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';


// import CameraScreen from './screens/CameraScreen'

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
              headerTitleStyle: { fontSize: 10 },

              headerRight: () => (
                <SettingsButton />
              )
            }}


          />


          <Stack.Screen name="NamesForm" component={NamesForm} />
          <Stack.Screen name="CustomCrop" component={CustomCrop} />
          <Stack.Screen name="CroppedImageScreen" component={CroppedImageScreen} />
          <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
          {/* <Stack.Screen name="NewCamera" component={CameraScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
