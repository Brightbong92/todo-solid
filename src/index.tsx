/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router } from "@solidjs/router";
import { ListPage } from "./pages/list";
import { NotFoundPage } from "./pages/not-found";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/list" component={ListPage} />
      <Route path="*paramName" component={NotFoundPage} />
    </Router>
  );
}, root as HTMLElement);
