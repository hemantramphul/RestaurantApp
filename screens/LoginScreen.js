import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    console.log('User logged in ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          width: '60%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text>Don't have an account yet?</Text>

        <View style={styles.verticalLine}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 2,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 10,
    width: '85%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSignup: {
    fontSize: 12,
  },
  verticalLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#909090',
  },
});
