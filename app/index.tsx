import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/me.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>Hello World!</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        First react native app
      </Text>

      <View style={styles.card}>
        <Text>This is a card</Text>
      </View>
    </View>
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
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
});
