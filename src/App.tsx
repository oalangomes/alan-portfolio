import { Box, ChakraProvider, Link } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
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
    <LanguageProvider>
      <HashRouter>
        <Box w={'100%'} maxW={'100vw'} overflowX={'hidden'}>
          <Link
            href={'#main-content'}
            position={'fixed'}
            top={2}
            left={2}
            zIndex={100}
            px={4}
            py={2}
            borderRadius={'lg'}
            bg={'orange.400'}
            color={'gray.900'}
            fontWeight={800}
            transform={'translateY(-140%)'}
            transition={'transform 120ms ease'}
            _focusVisible={{
              transform: 'translateY(0)',
              boxShadow: 'outline',
            }}>
            Skip to content
          </Link>

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
  </ChakraProvider>
);
