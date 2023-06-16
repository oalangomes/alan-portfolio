import * as React from "react"
import CenterFooter from "./components/globals/CenterFooter"
import Header from "./components/globals/Header"

import Home from "./components/pages/Home"

import {
  ChakraProvider,

  theme,
} from "@chakra-ui/react"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Header></Header>
    <Home></Home>
    <CenterFooter></CenterFooter>
  </ChakraProvider>
)
