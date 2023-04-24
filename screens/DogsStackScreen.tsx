import { createStackNavigator } from '@react-navigation/stack';
const DogsStack = createStackNavigator();
import DogsScreen from './DogsScreen';
import DetailsScreen from './DetailsScreen';

export default function DogsStackScreen() {
  return (
    <DogsStack.Navigator
        initialRouteName="DogsScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e1154f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <DogsStack.Screen
          name="DogsScreen"
          component={DogsScreen}
          options={{
            title: "Dogs",
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24
            }
          }}
        />
        <DogsStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details'
          }}
        />
      </DogsStack.Navigator>
  );
}
