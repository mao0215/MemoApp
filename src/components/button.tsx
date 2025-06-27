import { JSX } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={sytles.button}>
      <Text style={sytles.buttonLable}>{label}</Text>
    </TouchableOpacity>
  );
};

const sytles = StyleSheet.create({
  button: {
    backgroundColor: "#467fd3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLable: {
    fontSize: 16,
    lineHeight: 32,
    color: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default Button;
