import { JSX, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../../config";

//import Header from "../../components/header";
import CircleButton from "../../components/circleButton";
import Icon from "../../components/icon";
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView";
const handlePress = (bodyText: string): void => {
  //新規メモを作成しデータベースへ保存
  if (auth.currentUser === null) {
    return;
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`); //usersの中の今のidの中のmemosの中に格納
  addDoc(ref, {
    //子の中が保存したいデータ
    bodyText: bodyText, //memonの中身
    updatedAt: Timestamp.fromDate(new Date()), //時間の中身
  })
    .then((docRef) => {
      //docRefドキュメントへの参照
      console.log("success", docRef.id);
      router.back();
    })
    .catch((error) => {
      console.log(error);
    });
};

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Header /> */}
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
          handlePress(bodyText);
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
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Create;
