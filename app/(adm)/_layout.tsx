import { Tabs } from 'expo-router';
import React from 'react';
import { Button, Text } from 'react-native';
import { Header } from '@/components/header';

export default function TabLayout() {

  return (
    <>
      <Tabs>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍💻</Text>), tabBarLabel: "Cadastro de Roupas"}}></Tabs.Screen>
      </Tabs>
    </>
  );
}
