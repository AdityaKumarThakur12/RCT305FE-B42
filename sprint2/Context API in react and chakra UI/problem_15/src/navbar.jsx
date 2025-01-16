// src/Navbar.jsx
import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useAuth } from './authContext';
import { useTheme } from './themeContext';

const Navbar = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const { toggleTheme } = useTheme();

    return (
        <Flex as="nav" p={4} bg="teal.500" color="white" justify="space-between">
            <Text>{isAuthenticated ? 'Logged In' : 'Logged Out'}</Text>
            <Button onClick={toggleTheme} colorScheme="teal">
                Toggle Theme
            </Button>
            <Button onClick={isAuthenticated ? logout : login} colorScheme="teal">
                {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
        </Flex>
    );
};

export default Navbar;