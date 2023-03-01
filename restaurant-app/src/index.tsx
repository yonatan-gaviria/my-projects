import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheets/stylesheet.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Root from './routes/root';
import FoodProductContainer from './componets/FoodProductContainer';
import { Tables } from './handleTable/Tables';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tables/>,
  },
  {
    path: "/App",
    element: <App/>,
  },
  {
    path: "/Food",
    element: <FoodProductContainer/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
