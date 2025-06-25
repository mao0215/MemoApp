import { JSX } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/header";
import MemoListItem from "../components/MemoListItem";
import CircleButton from "../components/circleButton";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      {/*memoList*/}
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
export default Index;
