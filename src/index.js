import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import ImageList from "./components/ImageList/ImageList";
import Image from "./components/Image/Image";
import store from "./store/index";
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ImageList />,
  },
  {
    path: "/image",
    element: <Image />
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
