import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavouritesScreen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
