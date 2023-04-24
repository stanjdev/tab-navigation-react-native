import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

interface IconProps {
  name: string
  size: number
  color: string
}

export default function Icon({name, size, color}: IconProps) {
  return (
    <Ionicons name={name} size={size} color={color} />
  );
};
