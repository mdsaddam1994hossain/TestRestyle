import { createBox, createText, useTheme } from "@shopify/restyle";
import React from "react";
import { ScrollView } from "react-native";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const HomeScreen = () => {
  return (
    <ScrollView>
      <Box padding="m" backgroundColor="cardPrimaryBackground">
        <Text variant="body" color="mainBackground">
          Home Screen Filler text is text that shares some characteristics of a
          real written text, but is random or otherwise generated. It may be
          used to display a sample of fonts, generate text for testing, or to
          spoof an e-mail spam filter. Home Screen Filler text is text that
          shares some characteristics of a real written text, but is random or
          otherwise generated. It may be used to display a sample of fonts,
          generate text for testing, or to spoof an e-mail spam filter. Home
          Screen Filler text is text that shares some characteristics of a real
          written text, but is random or otherwise generated. It may be used to
          display a sample of fonts, generate text for testing, or to spoof an
          e-mail spam filter. Home Screen Filler text is text that shares some
          characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text
          for testing, or to spoof an e-mail spam filter. Home Screen Filler
          text is text that shares some characteristics of a real written text,
          but is random or otherwise generated. It may be used to display a
          sample of fonts, generate text for testing, or to spoof an e-mail spam
          filter. Home Screen Filler text is text that shares some
          characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text
          for testing, or to spoof an e-mail spam filter. Home Screen Filler
          text is text that shares some characteristics of a real written text,
          but is random or otherwise generated. It may be used to display a
          sample of fonts, generate text for testing, or to spoof an e-mail spam
          filter. generated. It may be used to display a sample of fonts,
          generate text for testing, or to spoof an e-mail spam filter. Home
          Screen Filler text is text that shares some characteristics of a real
          written text, but is random or otherwise generated. It may be used to
          display a sample of fonts, generate text for testing, or to spoof an
          e-mail spam filter. Home Screen Filler text is text that shares some
          characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text
          for testing, or to spoof an e-mail spam filter.
        </Text>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
