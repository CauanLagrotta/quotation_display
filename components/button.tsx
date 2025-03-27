import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <Pressable style={styles.contaner} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contaner: {
    backgroundColor: "#c0e864",
    borderRadius: 5,
    padding: 15,
    margin: 50,
  },
  text: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
  },
});
