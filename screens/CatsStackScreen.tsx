import { createStackNavigator } from '@react-navigation/stack';
const CatsStack = createStackNavigator();
import CatsScreen from './CatsScreen';
import DetailsScreen from './DetailsScreen';

export default function CatsStackScreen() {
  return (
    <CatsStack.Navigator
        initialRouteName="CatsScreen"
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
        <CatsStack.Screen
          name="CatsScreen"
          component={CatsScreen}
          options={{
            title: "CatsScreen",
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
        <CatsStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details'
          }}
        />
      </CatsStack.Navigator>
  );
}
