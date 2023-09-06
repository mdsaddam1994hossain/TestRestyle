import { createBox, createText, useTheme } from "@shopify/restyle";
import React from "react";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const SettingsScreen = () => {
  return (
    <Box padding="m" backgroundColor="cardPrimaryBackground">
      <Text variant="body" color="mainBackground">
        SettingsScreen
      </Text>
    </Box>
  );
};

export default SettingsScreen;
