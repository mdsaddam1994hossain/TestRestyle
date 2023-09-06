import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "react-native";
import BottomNavigation from "./src/navigation";
import HomeScreen from "./src/screen/HomeScreen";

import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
