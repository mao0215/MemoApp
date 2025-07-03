import { JSX } from "react";
import { View, StyleSheet, Text } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

import Header from "../../components/header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/circleButton";
//import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Icon from "../../components/icon";
import LogOutButton from "../../components/logoutbutton";

const handlePress = (): void => {
  router.push("/memo/create");
};

const Index = (): JSX.Element => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      {/*memoList*/}
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleButton onPress={handlePress}>
        {/* <Feather name="plus" size={40} /> */}
        <Icon name="plus" size={40} color="white" />
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
