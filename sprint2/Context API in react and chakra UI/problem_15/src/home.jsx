import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';

const Main = () => {
    const products = Array.from({ length: 12 }, (_, index) => `Product ${index + 1}`);

    return (
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4} p={4}>
            {products.map((product) => (
                <Box key={product} borderWidth="1px" borderRadius="lg" p={4}>
                    <Text>{product}</Text>
                </Box>
            ))}
        </Grid>
    );
};

export default Main;