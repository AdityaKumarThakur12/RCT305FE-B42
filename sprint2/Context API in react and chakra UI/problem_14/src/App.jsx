import { ChakraProvider, Box, Flex, Grid, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContextProvider, AuthContext } from './AuthContext';
import { ThemeContextProvider, ThemeContext } from './ThemeContext';

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <ChakraProvider>
          <AppContent />
        </ChakraProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

function AppContent() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Flex
        as="nav"
        p="4"
        bg={theme === 'light' ? 'gray.100' : 'gray.700'}
        justifyContent="space-between"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap="4"
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            bg={theme === 'light' ? 'gray.200' : 'gray.600'}
          >
            {card}
          </Box>
        ))}
      </Grid>
      <Box
        as="footer"
        p="4"
        bg={theme === 'light' ? 'gray.300' : 'gray.800'}
        color={theme === 'light' ? 'black' : 'white'}
      >
        Footer Content
      </Box>
    </>
  );
}

export default App;
