import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  // const restId = route.params.restId;
  // const restName = route.params.restName;
  const route = useRoute();
  const restId = route.params.restId;
  const restName = route.params.restName;
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Text>Id: {restId}</Text>
      <Text>Name: {restName}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
