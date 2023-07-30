import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

function Tracking({navigation}) {
  return (
    <SafeAreaView style={{height: "100%", width: "100%", backgroundColor: "#FFD124"}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FFD124"
        // translucent={true}
      />
      <View style={{flex:1,height:"15%",justifyContent:"center", alignItems:"center"}}>
        <Text>Tra cứu</Text>
      </View>
    </SafeAreaView>
  );
}

export default Tracking;
