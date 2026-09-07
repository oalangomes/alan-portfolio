import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CenterFooter from './components/globals/footer/CenterFooter';
import Header from './components/globals/header/Header';
import { LanguageProvider } from './i18n/LanguageContext';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';

export const App = () => (
  <ChakraProvider theme={theme}>
    <LanguageProvider>
      <HashRouter>
        <Box w={'100%'} maxW={'100vw'} overflowX={'hidden'}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
          <CenterFooter />
        </Box>
      </HashRouter>
    </LanguageProvider>
  </ChakraProvider>
);
