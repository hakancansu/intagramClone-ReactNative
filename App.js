import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screnns";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{flex:1,marginTop:16}} >
      <StatusBar style="dark" />
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}
