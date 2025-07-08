import { JSX } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/circleButton";
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
        const { bodyText, updatedAt } = doc.data(); //doc.data()でメモデータにアクセス
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
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      {/* <Header /> */}

      {/*memoList*/}

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
