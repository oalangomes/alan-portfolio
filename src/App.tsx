import { Box, ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AccentThemeProvider } from './appearance/AccentThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import SkipToContent from './components/SkipToContent';
import CenterFooter from './components/globals/footer/CenterFooter';
import Header from './components/globals/header/Header';
import { LanguageProvider } from './i18n/LanguageContext';
import theme from './theme';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Projects = lazy(() => import('./pages/Projects'));

const RouteFallback = () => <Box minH={'55vh'} aria-hidden={'true'} />;

export const App = () => (
  <ChakraProvider theme={theme}>
    <AccentThemeProvider>
      <LanguageProvider>
        <HashRouter>
        <Box w={'100%'} maxW={'100vw'} overflowX={'hidden'}>
          <SkipToContent />

          <Header />

          <Box as={'main'} id={'main-content'} tabIndex={-1}>
            <ErrorBoundary>
              <Suspense fallback={<RouteFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/AboutMe" element={<AboutMe />} />
                  <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Box>

          <CenterFooter />
        </Box>
        </HashRouter>
      </LanguageProvider>
    </AccentThemeProvider>
  </ChakraProvider>
);
