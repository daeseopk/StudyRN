import React, { useEffect, useState } from "react";
import { View, StatusBar, Button, Text } from "react-native";
import styles from "../style/style";
import Navibar from "./Navibar";
import axios from "axios";
import GetLocation from "react-native-get-location";

export default function Home() {
   const [lat, setLat] = useState();
   const [lon, setLon] = useState();
   const [location_name, setLocation_name] = useState();
   const [country_name, setCountry_name] = useState();
   var API_KEY = "1215ed364041d2b72b8edb41882e73df";

   useEffect(() => {
      GetLocation.getCurrentPosition({
         enableHighAccuracy: true,
         timeout: 15000,
      })
         .then((location) => {
            setLat(location.latitude);
            setLon(location.longitude);
         })
         .catch((error) => {
            const { code, message } = error;
            console.warn(code, message);
         });
   });
   useEffect(() => {
      if (lat && lon) {
         const response = axios
            .get(
               `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            )
            .then(function (response) {
               setLocation_name(response.data.name);
               setCountry_name(response.data.sys.country);
               console.log(response.data);
            })
            .catch(function (error) {
               console.log(error);
            });
      }
   });

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" />
         <Navibar location_name={location_name} country_name={country_name} />
         <View style={styles.BodyContainer}>
            <Text style={styles.Text}>latitude : {lat}</Text>
            <Text style={styles.Text}>longtitude : {lon}</Text>
         </View>
      </View>
   );
}
