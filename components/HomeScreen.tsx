import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import Icon from './Icon';

export default function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}>Home Screen</Text>
      <Text style={styles.subText}>This is the main page of the app</Text>
      <Icon
        name="home-outline"
        size={32}
        color="chartreuse"
      />
    </View>
  );
}

