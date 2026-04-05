// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import posthog from "posthog-js";
import App from "./App";
import { ColorModeProvider } from "@boller002/ui";

posthog.init(process.env.REACT_APP_POSTHOG_KEY, {
  api_host: "https://us.i.posthog.com",
  autocapture: true,
  capture_pageview: true,
  capture_pageleave: true,
  mask_all_text: false,
  mask_all_element_attributes: false,
  disable_session_recording: false,
  cross_subdomain_cookie: false,
  persistence: "localStorage",
  api_transport: "fetch",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
