import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';
import { useEffect } from 'react';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Outfit: require('@/assets/fonts/Outfit.ttf'),
    HK: require('@/assets/fonts/NotoSansHK.ttf'),
    Inter: Inter_900Black
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  })

  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Register' options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
      </Stack>
    </>
  );
}
