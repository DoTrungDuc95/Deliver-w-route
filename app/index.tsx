import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Categories from '@/components/Categories';
import Restaurants from '@/components/Restaurants';
import Colors from '@/constants/Colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Categories />

        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />

        <Text style={styles.header}>Offers near you</Text>
        
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
