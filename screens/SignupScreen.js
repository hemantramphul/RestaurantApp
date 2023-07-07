import { useState } from "react";
import auth from "../database/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signupUser = (event) => {
    if (email === "" && password === "") {
      setError("Enter details to signup!");
    } else {
      event.preventDefault();
      setError("");
      if (validatePassword()) {
        register();
      }
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const register = () => {
    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            Alert.alert("User create successfully");
            navigation.navigate("Login");
          })
          .catch((err) => Alert.alert(err.message));
      })
      .catch((err) => setError(err.message));
  };

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Emails"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputBox}
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={signupUser}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <View
        style={{
          width: "55%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Already have an account?</Text>

        <View style={styles.verticalLine}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "blue", fontWeight: "bold" }}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 2,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#FFA611",
    borderColor: "#FFA611",
    borderWidth: 1,
    borderRadius: 10,
    width: "85%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
  verticalLine: {
    height: "100%",
    width: 2,
    backgroundColor: "#909090",
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});

export default SignupScreen;
