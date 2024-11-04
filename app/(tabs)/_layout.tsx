import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { Header } from '@/components/header';

export default function TabLayout() {

  return (
    <>
      <Tabs>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍💻</Text>), tabBarLabel: "Home"}}></Tabs.Screen>
        <Tabs.Screen name='explore' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍🐉</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍👓</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='roupas' options={{headerShown: false, tabBarIcon: () => (<Text>👔</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}
