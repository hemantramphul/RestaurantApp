import { StyleSheet, Text, View } from 'react-native';

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapsScreen</Text>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
