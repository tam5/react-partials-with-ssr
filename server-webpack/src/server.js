// src/server.js
import express from "express";
import { renderAppToString } from "./index"; // Import SSR function

const app = express();
const PORT = 3000;
const assetPrefix = `http://localhost:${PORT}`;

app.use("/public", express.static("public")); // Serve static files from 'public' folder

app.get("/note", (req, res) => {
  const notes = ["Note 1", "Note 2", "Note 3"];
  const appHTML = renderAppToString(notes); // Use SSR function

  // Include React and ReactDOM via the bundled script for hydration
  const htmlPartial = `
    <div id="root">${appHTML}</div>
    <script>
      window.__INITIAL_DATA__ = ${JSON.stringify(notes)};
      window.addEventListener('DOMContentLoaded', function() {
        // Call the hydrate function from the bundled script
        App.hydrateApp(window.__INITIAL_DATA__);
      });
    </script>
    <script src="${assetPrefix}/public/bundle.js"></script>  <!-- Client bundle -->
  `;

  res.send(htmlPartial);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
