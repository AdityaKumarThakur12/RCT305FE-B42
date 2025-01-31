import { Container, Heading,Text, Grid, GridItem, Card, Wrap, WrapItem, Avatar, Center } from '@chakra-ui/react'

export const Content = ()=>{
    return (
        <div w="70%" >
            <Heading textAlign="center">Our Client Speaks</Heading>
            <Text textAlign="center">We have been Working with the clients around the world</Text>
            <Grid templateColumns='repeat(3, 1fr)' margin="30px" gap={6}>
                <Card bg="rgb(202, 213, 218)" p="30px">
                    <Card p="10px" margin="20px" showArrow marginBottom="20px">
                    <Text fontSize="20px" textAlign="center"><b>Efficient Collaborating</b></Text>
                    <Text >
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design.
                    </Text>
                    </Card>
                    <Center display="flex" flexDirection="column">
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                    </Wrap>
                    <Text>Jane Copper</Text>
                    <Text>CEO at Abc carporation</Text>
                    </Center>
                    
                </Card>
                <Card bg="rgb(202, 213, 218)" p="30px">
                    <Card p="10px" margin="20px" marginBottom="20px">
                    <Text fontSize="20px" textAlign="center"><b>Efficient Collaborating</b></Text>
                    <Text >
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design.
                    </Text>
                    </Card>
                    <Center display="flex" flexDirection="column">
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                    </Wrap>
                    <Text>Jane Copper</Text>
                    <Text>CEO at Abc carporation</Text>
                    </Center>
                    
                </Card>
                <Card bg="rgb(202, 213, 218)" p="30px">
                    <Card p="10px" margin="20px" marginBottom="20px">
                    <Text fontSize="20px" textAlign="center"><b>Efficient Collaborating</b></Text>
                    <Text >
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design.
                    </Text>
                    </Card>
                    <Center display="flex" flexDirection="column">
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                    </Wrap>
                    <Text>Jane Copper</Text>
                    <Text>CEO at Abc carporation</Text>
                    </Center>
                    
                </Card>
                
            </Grid>
        </div>
    )
}