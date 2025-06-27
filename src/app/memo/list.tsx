import { JSX } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/circleButton";
//import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Icon from "../../components/icon";

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

      <CircleButton>
        {/* <Feather name="plus" size={40} /> */}
        <Icon name="plus" size={40} color="red" />
      </CircleButton>
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
