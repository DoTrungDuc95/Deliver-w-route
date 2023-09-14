import { Stack, useNavigation } from 'expo-router';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import Header from '@/components/header/Header';
import CustomHeader from '@/components/header/CustomHeader';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ header: () => <Header /> }} />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            header: () => <CustomHeader title="Filter" />,
          }}
        />
        <Stack.Screen
          name="(modal)/location"
          options={{
            presentation: 'fullScreenModal',
            animation: 'slide_from_bottom',
            header: () => <CustomHeader title="Location" />,
          }}
        />
        <Stack.Screen
          name="(modal)/dish"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="basket"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            header: () => <CustomHeader title="Basket" color="white" />,
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
