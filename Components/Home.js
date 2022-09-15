import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";

export default function Home(){
  return(
    <NavigationContainer independent={true}>
      <BottomTab/>
    </NavigationContainer>
  );
}