import React from "react";
import { View, Text } from "react-native";
import styles from "../style/style";
export default function Navibar({ location_name, country_name }) {
   return (
      <View style={styles.Navibar}>
         <Text style={styles.Text}>
            {location_name}, {country_name}
         </Text>
      </View>
   );
}
