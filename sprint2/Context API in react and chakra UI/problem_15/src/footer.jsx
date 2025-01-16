// src/Footer.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useTheme } from './themeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <Box
            as="footer"
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            p={4}
            bg={theme === 'light' ? 'gray.300' : 'gray.700'}
            color={theme === 'light' ? 'black' : 'white'}
            textAlign="center"
        >
            <Text>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</Text>
        </Box>
    );
};

export default Footer;