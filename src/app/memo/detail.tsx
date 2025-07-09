import { JSX } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import CircleButton from "../../components/circleButton";
import Icon from "../../components/icon";
import { auth, db } from "../../config";
import { type Memo } from "../../../types/memo";

const handlePress = (id: string): void => {
  router.push({ pathname: "memo/edit", params: { id } });
};

const Detail = (): JSX.Element => {
  const id = String(useLocalSearchParams().id);
  console.log(id);
  const [memo, setMemo] = useState<Memo | null>(null);
  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id));
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo; //as Memoで明示的に型を知らせる
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt,
      });
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>
          {memo?.bodyText}
          {/* ?は空でもエラ〜にならないオプショナルチェーン */}
        </Text>
        <Text style={styles.memoDate}>
          {memo?.updatedAt.toDate().toLocaleString("ja-JP")}
        </Text>
      </View>
      <View>
        <ScrollView style={styles.memoBody}>
          <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
        </ScrollView>
      </View>
      <CircleButton
        onPress={() => {
          handlePress(id);
        }}
        style={{ top: 60, bottom: "auto" }}
      >
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
    paddingHorizontal: 27,
  },
  memoBodyText: {
    paddingTop: 32,
    paddingBottom: 128,

    color: "#000000",
    fontSize: 16,
    lineHeight: 24,
  },
});
export default Detail;
