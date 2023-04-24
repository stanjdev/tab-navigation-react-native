import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import { Ionicons } from 'react-native-vector-icons'
import Icon from './Icon';

export default function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}>Settings Screen</Text>
      <Text style={styles.subText}>Edit your settings here</Text>
      <Icon
        name="basketball-outline"
        size={32}
        color="orange"
      />
    </View>
  );
}
