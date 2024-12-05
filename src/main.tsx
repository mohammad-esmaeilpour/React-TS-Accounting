import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

import "./tailwind.css";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ToastContainer />
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
