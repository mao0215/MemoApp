import { View, Text, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
//import { Feather, FontAwesome5 } from "@expo/vector-icons";

import Header from "../../components/header";
import CircleButton from "../../components/circleButton";
import Icon from "../../components/icon";

const handlePress = (): void => {
  router.push("memo/edit");
};

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025年6月25日 10:00</Text>
      </View>
      <View>
        <ScrollView style={styles.memoBody}>
          <Text style={styles.memoBodyText}>
            買い物リスト書体やレイアウトなどを確認するために用います。
            本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          </Text>
        </ScrollView>
      </View>
      <CircleButton onPress={handlePress} style={{ top: 160, bottom: "auto" }}>
        <Icon name="pencil" size={40} color="#ffffff" />
        {/* <FontAwesome5 name="pen" size={30} /> */}
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#467fd3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  memoBodyText: {
    color: "#000000",
    fontSize: 16,
    lineHeight: 24,
  },
});
export default Detail;
