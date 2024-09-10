// src/index.js
import React from "react";
import ReactDOMClient from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import App from "./App";

// Server-side rendering function
export function renderAppToString(notes) {
  return ReactDOMServer.renderToString(<App notes={notes} />);
}

// Client-side hydration function
export function hydrateApp(notes) {
  ReactDOMClient.hydrateRoot(
    document.getElementById("root"),
    <App notes={notes} />
  );
}
