import { View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, ...props }: { style?: object; [key: string]: unknown }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View 
        style={[{ backgroundColor: theme.uiBackground }, style, styles.card]} 
        {...props}
    />
  )
}

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 5,
  },
});