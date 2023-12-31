import { View,Text,StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Color from "./utils/Color";
import useWeatherInfo from "./Hooks/useWeatherInfo";
function App(){
  const data = useWeatherInfo('Multan')
return (
  <SafeAreaView>
    <View style={{backgroundColor:Colors.black,}}>
     <Text style={{color:'orange',fontSize:40}}>
      React Starter App
     </Text>
     <View style={styles.container}>
     <Text style={styles.text}>Created by Syed Talal Jilani</Text>
     </View>
     <View style={{backgroundColor:Color.PURPLE}}>
      <Text style={{fontSize:30}}>{data.tempC}</Text>
      <Text style={{fontSize:30}}>{data.location}</Text>
     </View>
  </View>
  </SafeAreaView>
);

}
const styles = StyleSheet.create({
  "container":{
    backgroundColor:Colors.white,
  },
  "text":{
    fontSize:20,
    color:'#1a3d1a'
  }
})
export default App