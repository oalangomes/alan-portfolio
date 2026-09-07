import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        minWidth: 0,
      },
      html: {
        '--portfolio-accent': '#dd6b20',
        '--portfolio-accent-strong': '#c05621',
        '--portfolio-accent-soft': '#fffaf0',
        '--portfolio-accent-rgb': '251, 146, 60',
        '--portfolio-accent-secondary-rgb': '59, 130, 246',
        '--portfolio-accent-contrast': '#ffffff',
      },
      "html[data-accent-theme='ember']": {
        '--portfolio-accent': '#dd6b20',
        '--portfolio-accent-strong': '#c05621',
        '--portfolio-accent-soft': '#fffaf0',
        '--portfolio-accent-rgb': '251, 146, 60',
        '--portfolio-accent-secondary-rgb': '59, 130, 246',
        '--portfolio-accent-contrast': '#ffffff',
      },
      "html[data-accent-theme='aurora']": {
        '--portfolio-accent': '#0891b2',
        '--portfolio-accent-strong': '#0e7490',
        '--portfolio-accent-soft': '#ecfeff',
        '--portfolio-accent-rgb': '34, 211, 238',
        '--portfolio-accent-secondary-rgb': '168, 85, 247',
        '--portfolio-accent-contrast': '#0f172a',
      },
      '::selection': {
        background: 'var(--portfolio-accent)',
        color: 'var(--portfolio-accent-contrast)',
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*, *::before, *::after': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
          scrollBehavior: 'auto !important',
        },
      },
    },
  },
});

export default theme;
