// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { AwsRum } from "aws-rum-web";
import App from "./App";
import { ColorModeProvider } from "@boller002/ui";

try {
  new AwsRum(
    "cea0c4d3-e662-458d-a35a-bc7ab5323784",
    "1.0.0",
    "us-east-1",
    {
      sessionSampleRate: 1,
      telemetries: ["errors", "performance", "http"],
      allowCookies: true,
      enableXRay: false,
      signing: false,
    }
  );
} catch (error) {
  // RUM init failure should not block the app
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
