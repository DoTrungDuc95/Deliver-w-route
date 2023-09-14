import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

type CustomHeaderProps = {
  title: string;
  color?: string;
};

const CustomHeader = ({
  title,
  color = Colors.lightGrey,
}: CustomHeaderProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: color }}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.goback}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="close-outline" size={28} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
  },
  goback: {
    position: 'absolute',
    left: 16,
  },
});
