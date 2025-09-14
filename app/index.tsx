import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedLogo from "../components/themed-logo";
import ThemedView from "../components/themed-view";
import Spacer from "../components/spacer";
import ThemedText from "../components/themed-text";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />

      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        Hello World!
      </ThemedText>

      <Spacer height={10} />

      <ThemedText style={styles.title}>First react native app</ThemedText>

      <Spacer />

      <Link href="/about">
        <ThemedText style={styles.link}>About Page</ThemedText>
      </Link>

      <Link href="/contact">
        <ThemedText style={styles.link}>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
