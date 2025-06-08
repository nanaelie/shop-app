import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5c4430",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: () => <IconSymbol size={28} name="accueil" color="#5b4432" />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Catégories',
          tabBarIcon: () => <IconSymbol size={28} name="categorie" color="#5b4432" />,
        }}
      />
      <Tabs.Screen
        name="panier"
        options={{
          title: 'Panier',
          tabBarIcon: () => <IconSymbol size={28} name="panier" color="#5b4432" />,
        }}
      />
      <Tabs.Screen
        name="parametres"
        options={{
          title: 'Paramètres',
          tabBarIcon: () => <IconSymbol size={28} name="parametres" color="#5b4432" />,
        }}
      />
      <Tabs.Screen name="accessoires" options={{href: null,}}/>
      <Tabs.Screen name="telephones" options={{href: null,}}/>
      <Tabs.Screen name="details" options={{href: null,}}/>
    </Tabs>
  );
}
