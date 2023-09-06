import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screen/HomeScreen";
import NotificationScreen from "./screen/NotificationScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingsScreen from "./screen/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const [notification, setNotification] = useState(true);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Notification"
        options={{ tabBarBadge: notification ? 3 : null }}
        component={NotificationScreen}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
