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
