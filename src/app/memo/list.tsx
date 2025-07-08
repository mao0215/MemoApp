import { JSX } from "react";
import { View, StyleSheet, Text, unstable_batchedUpdates } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import Header from "../../components/header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/circleButton";
//import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Icon from "../../components/icon";
import LogOutButton from "../../components/logoutbutton";

import { db, auth } from "../../config";
import { type Memo } from "../../../types/memo";

const handlePress = (): void => {
  router.push("/memo/create");
};

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    //useEffectは画面が表示するときと、消える時の処理に使える
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);
  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = [];
      snapshot.forEach((doc) => {
        console.log("memo", doc.data()); //doc.data()でメモデータにアクセス
        const { bodyText, updatedAt } = doc.data();
        remoteMemos.push({
          //remoteMomos配列に入れる
          id: doc.id,
          bodyText,
          updatedAt,
        });
      });
      setMemos(remoteMemos);
    });
    return unsubscribe; //上のunsubscribeの関数が実行されるのは、画面が消えたタイミング
  }, []);
  return (
    <View style={styles.container}>
      {/* <Header /> */}

      {/*memoList*/}
      <View>
        {memos.map((memo) => (
          <MemoListItem memo={memo} /> //{retrun  <MemoListItem memo={memo} />}と同じ意味
        ))}
        {/* <MemoListItem />
        <MemoListItem />
        <MemoListItem /> */}
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
export default List;
