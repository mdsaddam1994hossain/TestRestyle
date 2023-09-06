import { createBox, createText, useTheme } from "@shopify/restyle";
import React from "react";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const ProfileScreen = () => {
  return (
    <Box padding="m" backgroundColor="cardPrimaryBackground">
      <Text variant="body" color="mainBackground">
        ProfileScreen
      </Text>
    </Box>
  );
};

export default ProfileScreen;
