import { useState } from "react";
import { auth } from "../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const registerUser = (e) => {
    if (email === "" && password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      e.preventDefault();
      setIsLoading(true);
      if (validatePassword() && validatePassworLength(password)) {
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            console.log(res.user);
            console.log("User registered successfully!");
            navigation.navigate("Login");
          })
          .catch((err) => {
            setError(err.message);
            console.log(err);
          });
      }

      setIsLoading(false);
    }
  };

  const validatePassworLength = (password) => {
    let isValid = false;
    setPassword(password);

    if (password !== "" && password.length >= 6) {
      isValid = true;
      setError("");
    } else {
      setError("Passwords too short.");
    }

    return isValid;
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

  const validateEmail = (email) => {
    let isValid = false;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setErrorEmail("");
    if (reg.test(email) !== false) {
      isValid = true;
    } else {
      setErrorEmail("Email is not correct");
    }
    setEmail(email);

    return isValid;
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )}

      <TextInput
        style={errorEmail ? styles.inputBoxError : styles.inputBox}
        value={email}
        onChangeText={(email) => validateEmail(email)}
        placeholder="Emails"
        autoCapitalize="none"
      />
      {errorEmail !== "" && <Text style={styles.error}>{errorEmail}</Text>}
      <TextInput
        style={error ? styles.inputBoxError : styles.inputBox}
        value={password}
        onChangeText={(password) => validatePassworLength(password)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={error ? styles.inputBoxError : styles.inputBox}
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={registerUser}>
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
  inputBoxError: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "red",
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
    marginTop: 0,
    fontSize: 10,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.47)",
    zIndex: 999,
  },
});

export default SignupScreen;
