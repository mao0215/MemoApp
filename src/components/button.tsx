import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
}

const Button = (props: Props): JSX.Element => {
  const { label } = props;
  return (
    <View style={sytles.button}>
      <Text style={sytles.buttonLable}>{label}</Text>
    </View>
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
