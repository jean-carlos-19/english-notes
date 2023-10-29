import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from "react-native";
import { RootStackParamList, RootButtonParamList } from '@/types'
import { HomeScreen, CategoryScreen, VocabularyScreen } from "@/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootButtonParamList>();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Category"
          options={{ headerShown: false }}
          component={CategoryScreen}
        />
        <Stack.Screen
          name="Vocabulary"
          options={{ headerShown: false }}
          component={VocabularyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}