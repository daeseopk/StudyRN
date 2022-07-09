import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
   },
   Navibar: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
      borderWidth: 0.5,
      borderBottomColor: "white",
   },
   BodyContainer: {
      flex: 9,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
   },
   Text: {
      top: 20,
      color: "white",
      fontSize: 20,
   },
});

export default styles;
