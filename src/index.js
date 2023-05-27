import React from 'react';
import ReactDOM from 'react-dom/client';
import Start from './layouts/start';
import About from './layouts/about';
import Multi from './components/multi';
import Sum from './components/sum';
import Transpose from './components/transpose';
import Minors from './components/minors';
import Inverse from './components/inverse';
import Det from './components/determinant';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import './main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "multi",
    element: <Multi />,
  },
  {
    path: "sum",
    element: <Sum />,
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "transpose",
    element: <Transpose />
  },
  {
    path: "minors",
    element: <Minors />
  },
  {
    path: "inverse",
    element: <Inverse />
  },
  {
    path: "det",
    element: <Det />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);