import * as React from "react"
import CenterFooter from "./components/globals/CenterFooter"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Header from "./components/globals/Header"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import AboutMe from "./pages/AboutMe"
import ProjectDetails from "./pages/ProjectDetails"
import Projects from "./pages/Projects"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Contact",
    element: <Contact />
  },
  {
    path: "AboutMe",
    element: <AboutMe />
  },
  {
    path: "ProjectDetails/:id",
    element: <ProjectDetails />
  },
  {
    path: "Projects",
    element: <Projects />
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header></Header>
    <RouterProvider router={router} />


    <CenterFooter></CenterFooter>
  </ChakraProvider>
)
