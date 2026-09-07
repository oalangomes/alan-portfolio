import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CenterFooter from './components/globals/footer/CenterFooter';
import Header from './components/globals/header/Header';
import { LanguageProvider } from './i18n/LanguageContext';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Projects = lazy(() => import('./pages/Projects'));

const RouteFallback = () => <Box minH={'55vh'} aria-hidden={'true'} />;

export const App = () => (
  <ChakraProvider theme={theme}>
    <LanguageProvider>
      <HashRouter>
        <Box w={'100%'} maxW={'100vw'} overflowX={'hidden'}>
          <Header />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </Suspense>
          <CenterFooter />
        </Box>
      </HashRouter>
    </LanguageProvider>
  </ChakraProvider>
);
