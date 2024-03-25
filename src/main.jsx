import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster, toast } from 'sonner'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Root/Home/Home';
import Root from './components/Root/Root';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch(`/Books.json`)
      },
      {
        path: '/pages',
        element: <PagesRead></PagesRead>,
        loader: ()=>fetch(`/Books.json`)
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch(`/Books.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors position="bottom-right" />
  </React.StrictMode>,
  
)
