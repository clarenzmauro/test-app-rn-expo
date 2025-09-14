import { Image, useColorScheme, StyleSheet } from "react-native";
import { ImageStyle } from "react-native";

// ideally this should be two distinct images
import logoDark from "../assets/me.png";
import logoLight from "../assets/me.png";

interface ThemedLogoProps {
  style?: ImageStyle;
}

const ThemedLogo = ({ style, ...props }: ThemedLogoProps) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? logoDark : logoLight;

  return <Image source={logo} style={[styles.logo, style]} {...props} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
});
