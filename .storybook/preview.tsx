import { Preview, setCustomElementsManifest } from "@storybook/web-components";
import * as DocBlocks from "@storybook/blocks";
import * as React from "react";

import customElements from "../custom-elements.json";

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlocks.Title />
          <DocBlocks.Description />
          <DocBlocks.Primary />
          <DocBlocks.Controls sort="alpha"  />
          <DocBlocks.Stories />
        </>
      ),
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setCustomElementsManifest(customElements);

export default preview;
