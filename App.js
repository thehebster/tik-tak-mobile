import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import {PermissionsAndroid, Alert} from 'react-native';

const App = () => {
  // const [didEnableLocation, setDidEnableLocation] = useState(false);

  return <WebView
          source={{ uri: "https://tiktakapp.herokuapp.com" }} 
          style={{ marginTop: 20 }}
          geolocationEnabled={true}
          onMessage={(event)=> console.log(event.nativeEvent.data)}
          scalesPageToFit={true}
          javaScriptEnabled = {true}
        />

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //         'title': 'Location Access Permission',
  //         'message': 'We would like to use your location for not-stalking purposes!'
  //         }
  //     );

  //     if (granted == PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log("Stalkin- I mean location services enabled!");

  //         await navigator.geolocation.getCurrentPosition((position) => {
  //             setDidEnableLocation(true);
  //             Alert.alert("Stalkin- I mean location services enabled!");
  //           },
  //           (error) => console.log(error),
  //           {enableHighAccuracy: false, timeout: 50000}
  //         );
  //     }
  //     else {
  //         setDidEnableLocation(false);
  //         console.log("Location permission denied... :(");
  //     }
  //   } 
  //   catch (err) {
  //     console.warn(err);
  //   }
  // }
//for this to work, location must be switched on, on the device
//you also have to add   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> 
//to your AndroidManifest.xml

  // useEffect(() => requestLocationPermission, []);

  // console.log("Thingy: ", RNAndroidLocationEnabler);

  // React.useEffect(() => RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
  // .then(data => {
  //   console.log("Data: ", data);
  //   setDidEnableLocation(data);
  // })
  // .catch(err => {
  //   setDidEnableLocation(false);
  // }), [])
  // return 
    // (
    // <View>
    //   { 
    //   didEnableLocation ? 
        // (<WebView 
        //   source={{ uri: "https://tiktakapp.herokuapp.com" }} 
        //   style={{ marginTop: 20 }}
        //   geolocationEnabled={true}
        //   onMessage={(event)=> console.log(event.nativeEvent.data)}
        //   scalesPageToFit={true}
        //   javaScriptEnabled = {true}
        // />)
  //       : 
  //       (<Text>Nothing loaded yet!</Text>)
  //     }
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;