import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/Search";
import ProfileScreen from "./screens/Profile";
import ReelScreen from "./screens/Reel";
import ShopScreen from "./screens/Shop";
import {
  Home,
  HomeFilled,
  Search,
  SearchFilled,
  Reel,
  ReelFilled,
  Shop,
  ShopFilled,
} from "./Icons";

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              <HomeFilled size={30} fill={color} />;
            }
            return <Home size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              <SearchFilled size={30} fill={color} />;
            }
            return <Search size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              <ReelFilled size={30} fill={color} />;
            }
            return <Reel size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) {
              <ShopFilled size={30} fill={color} />;
            }
            return <Shop size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                styles.avatar,
                {
                  borderColor: focused ? "#000" : "transparent",
                },
              ]}
              source={{
                uri: "https://i4.hurimg.com/i/hurriyet/75/750x422/6226ffca4e3fe10ff4491649.jpg",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Screens;

const styles = StyleSheet.create({
  avatar: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 21,
  },
});
