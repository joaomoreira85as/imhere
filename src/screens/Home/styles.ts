import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 28,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
  },
  form: {
    width: "100%",
    marginTop: 26,
    marginBottom: 36,
    flexDirection: "row",
    columnGap: 7,
  },
});
