import React from "react";
import Hero from "./components/Hero";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero/>} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
   <RouterProvider router = {router}/>
  );
};

export default App;
