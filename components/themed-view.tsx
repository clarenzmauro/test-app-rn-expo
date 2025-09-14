import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style, ...props }: { style?: object; [key: string]: unknown }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View 
        style={[{ backgroundColor: theme.background }, style]} 
        {...props}
    />
  )
}

export default ThemedView;