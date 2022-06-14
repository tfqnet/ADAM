/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import OfficesScreen from 'screens/OfficesScreen'
import TasksScreen from 'screens/TasksScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {
 

  return (
    <NavigationContainer>

      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={OfficesScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
          </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
  }
});

export default App;
