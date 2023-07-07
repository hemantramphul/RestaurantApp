import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./navigator/AppNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
