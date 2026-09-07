import { Button } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function SkipToContent() {
  const { language } = useLanguage();

  const focusMain = () => {
    document.getElementById('main-content')?.focus();
  };

  return (
    <Button
      position={'fixed'}
      top={2}
      left={2}
      zIndex={100}
      size={'sm'}
      borderRadius={'lg'}
      bg={'var(--portfolio-accent)'}
            color={'var(--portfolio-accent-contrast)'}
      color={'var(--portfolio-accent-contrast)'}
      fontWeight={800}
      transform={'translateY(-160%)'}
      transition={'transform 120ms ease'}
      onClick={focusMain}
      _focusVisible={{
        transform: 'translateY(0)',
        boxShadow: 'outline',
      }}>
      {language === 'pt-BR' ? 'Ir para o conteúdo' : 'Skip to content'}
    </Button>
  );
}
