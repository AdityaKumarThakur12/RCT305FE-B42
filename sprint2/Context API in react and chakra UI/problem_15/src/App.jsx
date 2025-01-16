// src/App.jsx
import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AuthProvider } from './authContext';
import { ThemeProvider } from './themeContext';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Main from './home';
import Footer from './footer';

const App = () => {
    return (
        <ChakraProvider>
            <AuthProvider>
                <ThemeProvider>
                    <Flex direction="column" minHeight="100vh">
                        <Navbar />
                        <Flex flex="1">
                            <Sidebar />
                            <Main />
                        </Flex>
                        <Footer />
                    </Flex>
                </ThemeProvider>
            </AuthProvider>
        </ChakraProvider>
    );
};

export default App;