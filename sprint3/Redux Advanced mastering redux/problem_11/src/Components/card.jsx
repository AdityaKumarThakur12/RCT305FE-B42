import { Card, CardHeader, Text,Image, CardBody, Badge, Stack,Button, Center } from '@chakra-ui/react'

export const CardSection = ()=>{
    return (
        <Card w="29%" margin="auto" p="20px">
            
            <CardBody margin="auto" textAlign="center"> 
            <Image borderRadius='full' boxSize='150px' margin='auto'  src='https://bit.ly/dan-abramov'alt='Dan Abramov'/>
            <Text fontSize="36px"><b>Lindsey James</b></Text>
            <Text fontSize='20px' color='grey'><b>@lindsey_jam3s</b></Text>
            <Text fontSize="24px" marginTop="20px" color="#454545">Actress, Musician, Songwriter and artist. PM for work enquires</Text>
            <Text fontSize="23px" marginTop="10px" color="#454545">Or</Text>
            <Text fontSize="23px" marginTop="10px" color='blue'>#tag</Text>
            <Text fontSize="23px" marginTop="10px" color="#454545" >me in your posts</Text>
            <Stack direction='row' marginTop="30px" >
                <Badge fontSize='20px' color='grey'>#ART</Badge>
                <Badge fontSize='20px' color='grey'>#PHOTOGRAPHY</Badge>
                <Badge fontSize='20px' color='grey'>#MUSIC</Badge>
            </Stack>
            <Stack direction='row' >
                <Button  p="23px 35px" margin="auto" marginTop="30px" borderRadius="20px">Message</Button>
                <Button colorScheme='blue' margin="auto" marginTop="30px" p="23px 35px" borderRadius="20px">Follow</Button>
            </Stack>
            </CardBody>
            
        </Card>
    )
}