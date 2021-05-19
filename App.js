import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import NamesForm from './components/NamesForm';
import SettingsButton from './components/SettingsButton';
import CroppedImageScreen from './screens/CroppedImageScreen';
import CustomCrop from './screens/CustomCrop';
import CustomRotate from './screens/CustomRotate';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';


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


          <Stack.Screen
            name="NamesForm"
            component={NamesForm}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#555555' },
              headerTitleStyle: { fontSize: 10 },
            }}
          />
          <Stack.Screen
            name="CustomCrop"
            component={CustomCrop}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#555555' },
              headerTitleStyle: { fontSize: 10 },
            }}
          />
          <Stack.Screen
            name="CustomRotate"
            component={CustomRotate}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#555555' },
              headerTitleStyle: { fontSize: 10 },
            }}
          />
          <Stack.Screen
            name="CroppedImageScreen"
            component={CroppedImageScreen}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#555555' },
              headerTitleStyle: { fontSize: 10 },
            }}
          />
          <Stack.Screen
            name="SummaryScreen"
            component={SummaryScreen}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#555555' },
              headerTitleStyle: { fontSize: 10 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
