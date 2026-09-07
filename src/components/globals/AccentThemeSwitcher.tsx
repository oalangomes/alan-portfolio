import {
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FiCheck, FiDroplet } from 'react-icons/fi';
import { useAccentTheme } from '../../appearance/AccentThemeContext';
import { useLanguage } from '../../i18n/LanguageContext';

const themes = [
  {
    id: 'ember' as const,
    label: 'Ember',
    color: '#dd6b20',
  },
  {
    id: 'aurora' as const,
    label: 'Aurora',
    color: '#0891b2',
  },
];

export default function AccentThemeSwitcher() {
  const { accentTheme, setAccentTheme } = useAccentTheme();
  const { language } = useLanguage();
  const isPortuguese = language === 'pt-BR';

  const tooltip = isPortuguese ? 'Tema de cores' : 'Color theme';
  const menuLabel = isPortuguese ? 'Tema de cores' : 'Color theme';

  return (
    <Menu placement={'bottom-end'}>
      <Tooltip label={tooltip}>
        <MenuButton
          as={IconButton}
          size={'md'}
          variant={'ghost'}
          borderRadius={'full'}
          icon={<FiDroplet />}
          aria-label={tooltip}
        />
      </Tooltip>

      <MenuList minW={'190px'} borderRadius={'xl'} p={2} boxShadow={'xl'}>
        <Text
          px={3}
          pt={1}
          pb={2}
          fontSize={'xs'}
          fontWeight={800}
          textTransform={'uppercase'}
          letterSpacing={'0.12em'}
          color={'gray.500'}>
          {menuLabel}
        </Text>

        {themes.map((theme) => {
          const active = accentTheme === theme.id;

          return (
            <MenuItem
              key={theme.id}
              onClick={() => setAccentTheme(theme.id)}
              borderRadius={'lg'}
              fontWeight={active ? 750 : 550}>
              <HStack justify={'space-between'} w={'100%'} gap={4}>
                <HStack spacing={3}>
                  <Box
                    w={3}
                    h={3}
                    borderRadius={'full'}
                    bg={theme.color}
                    boxShadow={active ? `0 0 14px ${theme.color}` : undefined}
                  />
                  <Text>{theme.label}</Text>
                </HStack>
                {active && <FiCheck aria-hidden={'true'} />}
              </HStack>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
