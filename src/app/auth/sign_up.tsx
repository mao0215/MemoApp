import { JSX } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";

import Header from "../../components/header";
import Button from "../../components/button";

const hadlePress = (): void => {
  //会員登録
  router.push("/memo/list");
};

const SignUp = (): JSX.Element => {
  return (
    <View style={sytles.container}>
      <Header />
      <View style={sytles.inner}>
        <Text style={sytles.title}>Sign Up</Text>
        <TextInput style={sytles.input} value="Email addres" />
        <TextInput style={sytles.input} value="Passward" />

        <Button label="Submit" onPress={hadlePress} />
        <View style={sytles.footer}>
          <Text style={sytles.footerText}>Already registered?</Text>
          <Link href="/auth/log_in" asChild>
            <TouchableOpacity>
              <Text style={sytles.footerLink}>Log in.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },

  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "000000",
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467fd3",
  },
});

export default SignUp;
