// src/Sidebar.jsx
import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useAuth } from './authContext';

const Sidebar = () => {
    const { isAuthenticated } = useAuth();
    const display = useBreakpointValue({ base: 'none', md: 'block' });

    return (
        <Box
            as="aside"
            width={{ base: 'full', md: '250px' }}
            display={display}
            bg="gray.200"
            p={4}
        >
            {isAuthenticated && <Text>Welcome, User!</Text>}
        </Box>
    );
};

export default Sidebar;