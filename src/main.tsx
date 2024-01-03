import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { RoutesApp } from "./routes";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/contexts/authContext";

import "./styles/styles.css";
import "./styles/tailwind.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { Dashboard } from "./screens/Dashboard/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Toaster />
        {/* <RoutesApp /> */}
        <Dashboard />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
