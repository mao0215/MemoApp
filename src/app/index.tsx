import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        {/*ヘッダーの下側 */}
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
        {/*ヘッダーの下側 */}
      </View>
      <View>
        {/* memoItem1の構造体 */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年6月25日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* memoItem1の構造体 */}

        {/* memoItem2の構造体 */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年6月25日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* memoItem2の構造体 */}
        {/* memoItem3の構造体 */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年6月25日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* memoItem3の構造体 */}
      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Index;
