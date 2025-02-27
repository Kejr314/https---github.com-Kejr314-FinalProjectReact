import React from "react";
import ReactDOMClient from "react-dom/client";
import { Type } from "./screens/Type";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Type />);
