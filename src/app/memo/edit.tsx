import { JSX } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";

import CircleButton from "../../components/circleButton";
import Icon from "../../components/icon";
import { auth, db } from "../../config";
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView";

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) {
    return;
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
  // データベースにデータの保蔵
  setDoc(ref, { bodyText, updatedAt: Timestamp.fromDate(new Date()) })
    .then(() => {
      router.back();
    })
    .catch((error) => {
      console.log(error);
      Alert.alert("更新に失敗しました。");
    });
};
const Edit = (): JSX.Element | null => {
  const id = String(useLocalSearchParams().id);
  const [bodyText, setBodyText] = useState("");
  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    // データベースから特定のidのドキュメントを読んでくる
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);

    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef?.data()?.bodyText;
        setBodyText(RemoteBodyText);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("edit:", id);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContiner}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton
        onPress={() => {
          handlePress(id, bodyText);
        }}
      >
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inputContiner: {
    flex: 1,
  },
  input: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Edit;
