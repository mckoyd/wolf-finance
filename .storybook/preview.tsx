import "../src/app/globals.css";
import "../src/styles/tokens.css";

declare global {
  interface Window {
    process?: any;
  }
}
if (typeof window !== "undefined") {
  window.process = window.process ?? { env: {} };
}

import type { Preview } from "@storybook/react";
import mockRouter from "next-router-mock";

mockRouter.push("/");

export const preview: Preview = {
  parameters: {
    controls: { expanded: false },
  },
};

export default preview;
